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

try:
    # Load the page1.html file
    driver.get("http://127.0.0.1:5000/page1")  # Update with the correct path to your HTML file

    # Test 1: Verify the page title
    assert "PlayLists" in driver.title
    print("Test 1: Page title verified.")
    time.sleep(1)  # Sleep for 1 second for observation

    # Test 2: Check for the presence of the hero section
    hero_section = driver.find_element(By.CLASS_NAME, "hero")
    assert hero_section is not None
    print("Test 2: Hero section is present.")
    time.sleep(1)  # Sleep for 1 second for observation

    # Test 3: Click on the first playlist link and verify the URL
    first_playlist_link = driver.find_element(By.XPATH, '//a[contains(@href, "playlist1")]')
    first_playlist_link.click()
    print("Test 3: Clicked on the first playlist link.")
    time.sleep(1)  # Sleep for 1 second for observation

    # Wait for navigation to the new page
    WebDriverWait(driver, 10).until(EC.url_contains("list?playlist=playlist1"))
    print("Test 3: Navigated to the first playlist.")
    time.sleep(1)  # Sleep for 1 second for observation


finally:
    # Close the browser
    driver.quit()
    print("Browser closed.")
