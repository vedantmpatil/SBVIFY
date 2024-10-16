import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.service import Service

# Path to your ChromeDriver executable
driver_path = "C:\\chromedriver.exe"  # Ensure this is correct
service = Service(driver_path)

# Initialize the Chrome WebDriver using the service
driver = webdriver.Chrome(service=service)
driver.maximize_window()

# Function to test the music player index page
def test_music_player():
    try:
        # Navigate to the index page
        driver.get("http://localhost:5000/")  # Update with your local server URL

        # Pause for observation
        time.sleep(2)

        # Test the "TUNE UP" button
        tune_up_button = driver.find_element(By.ID, "tuneup")
        tune_up_button.click()  # Click the button

        # Wait for the page to load and verify the URL
        WebDriverWait(driver, 10).until(EC.url_contains("/page1"))
        print("TUNE UP button test passed!")

        # Pause for observation
        time.sleep(2)

        # Go back to the index page
        driver.back()

        # Pause for observation
        time.sleep(2)

        # Test the images
        for i in range(1, 7):
            image = driver.find_element(By.ID, f"img{i}")
            image.click()  # Click the image

            # Wait for the page to load and verify the URL
            WebDriverWait(driver, 10).until(EC.url_contains("/page1"))
            print(f"Image {i} test passed!")

            # Pause for observation
            time.sleep(1)

            # Go back to the index page
            driver.back()
            
            # Pause for observation
            time.sleep(1)
        
    except Exception as e:
        print(f"Test failed: {e}")
    finally:
        # Close the browser
        driver.quit()

# Run the test
if __name__ == "__main__":
    test_music_player()
