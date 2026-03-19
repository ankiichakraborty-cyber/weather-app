const apiKey = "b7dbf492e91c36acf4ad3051fe3ebdf4"; // get from openweathermap

let recent = JSON.parse(localStorage.getItem("cities")) || [];

function getWeather(city) {
    const input = city || document.getElementById("cityInput").value;

    if (!input) {
        showError("Please enter city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
        if (data.cod !== 200) {
            showError("City not found");
            return;
        }

        saveCity(input);
        displayCurrent(data);
        getForecast(data.coord.lat, data.coord.lon);
        clearError();
    });
}

function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(pos => {
        const { latitude, longitude } = pos.coords;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
        .then(res => res.json())
        .then(data => {
            displayCurrent(data);
            getForecast(latitude, longitude);
        });
    });
}

function displayCurrent(data) {
    document.getElementById("currentWeather").innerHTML = `
        <h2 class="text-xl">${data.name}</h2>
        <p>Temp: ${data.main.temp} °C</p>
        <p>Humidity: ${data.main.humidity}</p>
        <p>Wind: ${data.wind.speed}</p>
    `;
}

function getForecast(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
        let forecastHTML = "";

        data.list.slice(0,5).forEach(item => {
            forecastHTML += `
                <div class="bg-white/20 p-2 rounded">
                    <p>${item.dt_txt.split(" ")[0]}</p>
                    <p>${item.main.temp} °C</p>
                    <p>💧 ${item.main.humidity}</p>
                </div>
            `;
        });

        document.getElementById("forecast").innerHTML = forecastHTML;
    });
}

function saveCity(city) {
    if (!recent.includes(city)) {
        recent.push(city);
        localStorage.setItem("cities", JSON.stringify(recent));
        updateDropdown();
    }
}

function updateDropdown() {
    const dropdown = document.getElementById("recentCities");

    if (recent.length === 0) {
        dropdown.classList.add("hidden");
        return;
    }

    dropdown.classList.remove("hidden");
    dropdown.innerHTML = `<option>Select recent city</option>`;

    recent.forEach(city => {
        dropdown.innerHTML += `<option>${city}</option>`;
    });
}

function selectCity() {
    const city = document.getElementById("recentCities").value;
    getWeather(city);
}

function showError(msg) {
    document.getElementById("error").innerText = msg;
}

function clearError() {
    document.getElementById("error").innerText = "";
}

// INIT
updateDropdown();