# 🎵 SBVify — Music Player Web App with Selenium Testing

A responsive, browser-based music player that allows users to stream songs from curated playlists. The application supports basic playback controls, playlist browsing, and external YouTube access — now enhanced with **Selenium-based automated testing** for robust functionality validation.

---

## 🚀 Live Demo

🌐 Visit: [https://musicplayer.pythonanywhere.com](https://musicplayer.pythonanywhere.com)

---

## 🎯 Features

### 🎧 Music Player
- Stream static audio files directly in-browser
- Browse through multiple curated playlists
- Play, pause, and navigate through songs
- Access YouTube links related to each track

### 🧪 Automated Testing (Selenium)
- Functional tests to ensure UI components behave as expected
- Tests for:
  - Homepage rendering
  - Playlist listing
  - Songcard integrity
  - Page-specific content validation

### 💻 Responsive Design
- Built for desktop, tablet, and mobile use
- Ensures seamless user experience across all devices

---

## 🧰 Technologies Used

| Layer             | Tech Stack           |
|------------------|----------------------|
| Frontend         | HTML, CSS, JavaScript |
| Backend          | Python (Flask)       |
| Testing          | Selenium + Pytest    |
| Deployment       | PythonAnywhere       |
| Version Control  | Git + GitHub         |

---

## 🧪 Test Suite Overview

All Selenium-based test scripts are found in the root directory:

- `test_flask_app.py`: Verifies Flask routing and server response
- `Songcard_test.py`: Tests song card loading and audio behavior
- `index_test.py`: Tests home/index page rendering
- `list_test.py`: Tests playlist listing page functionality
- `page1_test.py`: Tests page1 view rendering and navigation

> ⚠️ Selenium tests require `chromedriver` or an equivalent WebDriver installed and accessible via PATH.

Run tests using:
```bash
pytest Songcard_test.py
```

Or to run all tests:
```bash
pytest
```

---

## 📁 Project Structure

```
SBVify/
├── static/
│   ├── css/
│   ├── js/
│   └── songs/
├── template/
│   ├── index.html
│   ├── list.html
│   └── page1.html
├── app.py
├── test_flask_app.py
├── index_test.py
├── list_test.py
├── page1_test.py
├── Songcard_test.py
└── README.md
```

---

## 🧪 Sample Test (Selenium)

```python
def test_homepage_loads(driver):
    driver.get("https://musicplayer.pythonanywhere.com")
    assert "SBVify" in driver.title
```

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).

---

## 🙌 Credits

- Developed by [@vedantmpatil](https://github.com/vedantmpatil)
- Testing with Selenium inspired by Python Automation best practices
