# weather-app

# 🌤 Weather Forecast Application

## 📌 Project Overview

This project is a **Weather Forecast Application** developed using **HTML, Tailwind CSS, and JavaScript**.
It allows users to search for real-time weather data of any city and also fetch weather information based on their current location.

The application provides a clean, responsive, and user-friendly interface with dynamic data fetched from the OpenWeather API.

---

## 🚀 Features

### 🔍 Search Weather by City

Users can enter any city name to get:

* Current temperature
* Humidity
* Wind speed

### 📍 Current Location Weather

* Fetches weather based on user’s geolocation
* Uses browser location permissions

### 🕓 Recently Searched Cities

* Stores searched cities using **localStorage**
* Displays them in a dropdown for quick access

### 📅 5-Day Forecast

* Shows upcoming weather conditions
* Displays:

  * Date
  * Temperature
  * Humidity

### ⚠️ Error Handling

* Displays proper error messages for:

  * Invalid city name
  * Empty input
  * API errors

### 📱 Responsive Design

* Fully responsive across:

  * Mobile devices
  * Tablets
  * Desktop screens

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the application
* **Tailwind CSS** – Styling and responsive UI
* **JavaScript (ES6)** – Logic and API handling
* **OpenWeather API** – Weather data provider

---

## 🔑 API Setup Instructions

1. Go to: https://openweathermap.org/api
2. Sign up and log in
3. Navigate to **My API Keys**
4. Copy your API key
5. Replace the following line in `script.js`:

```javascript
const apiKey = "YOUR_API_KEY";
```

---

## 📂 Project Structure

```
weather-app/
│
├── index.html
├── script.js
└── README.md
```

---

## ▶️ How to Run the Project

1. Download or clone the repository
2. Open the folder in **VS Code**
3. Open `index.html` using Live Server or browser
4. Enter a city name and click **Search**

---

## ⚠️ Notes

* API key activation may take **10–30 minutes** after creation
* Ensure internet connection is active
* Location access must be allowed for geolocation feature

---

## 🎯 Future Improvements

* Temperature unit toggle (°C / °F)
* Weather icons and animations
* Dynamic background based on weather
* Improved UI with transitions

---

## 👨‍💻 Author

**Ankita Chakraborty**

---

## 📌 Conclusion

This project demonstrates practical implementation
