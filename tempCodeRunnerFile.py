from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def test_songs_page():
    driver = webdriver.Chrome()
    driver.get('http://127.0.0.1:5000/list?playlist=playlist2')  # Replace with your web app URL

    # Wait for the songs table to be visible
    try:
        wait = WebDriverWait(driver, 10)
        
        # Ensure the arrow icon is clickable and click it to show the song table
        arrow_icon = wait.until(EC.element_to_be_clickable((By.ID, 'myarrow')))
        arrow_icon.click()

        # Now, find the song titles and test each one
        song_titles = driver.find_elements(By.CLASS_NAME, 'song-title-class')  # Replace with your actual class name

        for song_title_element in song_titles:
            song_title = song_title_element.text
            print(f'Testing song: {song_title}')
            song_title_element.click()

            # Wait for the song to start playing (you might want to adjust this condition)
            wait.until(EC.presence_of_element_located((By.ID, 'playing-indicator-id')))  # Replace with actual ID or class
            
            # Check if the song has started playing (you may want to verify this with a different approach)
            if is_song_playing():  # Implement this function based on your app's logic
                print(f'Success: "{song_title}" is playing.')
            else:
                print(f'Fail: "{song_title}" did not start playing.')

            # Click the arrow again to ensure the song table is visible for the next song
            arrow_icon.click()

    except Exception as e:
        print(f'An error occurred: {e}')
    finally:
        driver.quit()

def is_song_playing():
    # Logic to check if the song is playing
    # You can implement this based on the current state of your application
    pass

test_songs_page()
