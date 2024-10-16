
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import ElementClickInterceptedException, TimeoutException

# Path to your ChromeDriver executable
driver_path = "C:\\chromedriver.exe"  # Ensure this is correct
service = Service(driver_path)

# Initialize the Chrome WebDriver using the service
driver = webdriver.Chrome(service=service)
driver.maximize_window()
driver.get("http://127.0.0.1:5000/list?playlist=playlist2")  # Change this to the path of your HTML file

# Locate all song items initially
song_items = driver.find_elements(By.CLASS_NAME, "songItems")

# Function to click a song with retry logic
def click_song(song):
    for attempt in range(3):  # Retry 3 times
        try:
            WebDriverWait(driver, 10).until(EC.element_to_be_clickable(song)).click()
            print(f"Song played successfully.")
            return True  # Exit if clicked successfully
        except ElementClickInterceptedException:
            # print(f"Attempt {attempt + 1}: Click intercepted, trying again...")
            pass
            # time.sleep(1)  # Wait before retrying
        except TimeoutException:
            # print("Element took too long to become clickable.")
            break
    return False  # Return False if all attempts fail

# Iterate through each song
for index in range(len(song_items)):
    # Re-locate song items before clicking, in case of stale references
    song_items = driver.find_elements(By.CLASS_NAME, "songItems")
    
    # Click on the song with retry logic
    if click_song(song_items[index]):
        # Wait for 2 seconds to allow the song to start playing
        time.sleep(2)
        
        # Reload the page
        driver.refresh()
        
        # Wait for the page to reload and elements to be available
        time.sleep(2)

# Close the WebDriver
driver.quit()
