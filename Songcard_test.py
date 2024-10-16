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

def test_song_playback():
    driver.get('http://127.0.0.1:5000/list?playlist=playlist2')  # Replace with your actual URL

    try:
        # Wait for the page to load completely
        WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, 'mytable'))
        )
        
        print("Page loaded successfully.")
        time.sleep(2)  # Pause to observe the loaded page
        
        # Click on the first song
        first_song = driver.find_element(By.CSS_SELECTOR, '.songItems:nth-child(1) .songItemplay')
        first_song.click()
        print("Clicked on the first song.")
        time.sleep(2)  # Pause to observe the click action

        # Wait for the main card to become visible
        main_card = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, 'mainCard'))
        )
        print("Main card is visible.")
        time.sleep(2)  # Pause to observe the main card

        # Check if the playback buttons are available
        pause_button = driver.find_element(By.ID, 'myplay')
        download_button = driver.find_element(By.ID, 'downloadLink')
        youtube_link = driver.find_element(By.ID, 'youtubelink')
        previous_button = driver.find_element(By.ID, 'myskipprevious')
        next_button = driver.find_element(By.ID, 'myskipnext')

        # Check the initial state of the buttons
        assert pause_button.is_displayed(), "Pause button is not displayed."
        print("Pause button is displayed.")
        assert download_button.is_displayed(), "Download button is not displayed."
        print("Download button is displayed.")
        assert youtube_link.is_displayed(), "YouTube link is not displayed."
        print("YouTube link is displayed.")
        assert previous_button.is_displayed(), "Previous button is not displayed."
        print("Previous button is displayed.")
        assert next_button.is_displayed(), "Next button is not displayed."
        print("Next button is displayed.")

        # Click on the pause button
        pause_button.click()
        print("Pause button clicked.")
        time.sleep(2)  # Pause to observe the click action
        
        # Wait for the play button to be enabled (indicating it can be played)
        WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.ID, 'myplay'))
        )
        
        print("Play button is clickable now.")
        time.sleep(2)  # Pause to observe

        # Click the play button again
        pause_button.click()
        print("Play button clicked again.")
        time.sleep(2)  # Pause to observe playback
        
        # Click on the previous button
        previous_button.click()
        print("Previous button clicked.")
        time.sleep(2)  # Pause to observe

        # Click on the next button
        next_button.click()
        print("Next button clicked.")
        time.sleep(2)  # Pause to observe
        
        # Click on the download button
        download_button.click()
        print("Download button clicked.")
        time.sleep(2)  # Pause to observe download action

        # Click on the YouTube link
        youtube_link.click()
        print("YouTube link clicked.")
        time.sleep(2)  # Pause to observe redirection
        
    finally:
        # Close the WebDriver
        print("Closing the WebDriver.")
        time.sleep(2)  # Pause before closing to observe final state
        driver.quit()

# Call the function to run the test
test_song_playback()
