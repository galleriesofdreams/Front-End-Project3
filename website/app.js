/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';

// Personal API Key for OpenWeatherMap API
const apiKey = '&units=metric&appid=5c1405ed481a64d7eced83e04661eb67';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', generateWeather);

/* Function called by event listener */
function generateWeather(e){
    const zip = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;
    getWeather (baseURL, zip, apiKey)
    .then (function (weatherData) {
        const icon = weatherData.weather.icon;
        const temperature = weatherData.main.temp;
        const city = weatherData.name;
        const feeling = feelings;
        postData('/addWeather', {
            icon, temperature, city, feeling
            }).then(() => {
                updateUI();
            })  
        });
    }

/* Function to GET Web API Data*/
const getWeather = async (baseURL, zip, apiKey) => {
    // build URL into fetch call
    const res = await fetch(baseURL+zip+apiKey)
    // call API
    try {
        const weatherData = await res.json();
        console.log(weatherData)
        return weatherData;
    // handle error
    } catch(error) {
        console.log("error", error);
    }
}
/* Function to POST data */
async function postData(url, data) {
    await fetch(url, {
        //boilerplate
        method: 'POST',
        credentials: 'same-origin',
        headers: {
        'Content-Type': 'application/json',
        },
        //Body data type must match Content-Type
        body: JSON.stringify(projectData),
});
}

/* Function to GET Project Data */
const updateUI = async() => {
    const request = await fetch('/retrievedData');
    try{
        const lastEntry = await request.json();
        document.getElementById('icon').innerText = lastEntry.icon;
        document.getElementById('temperature').innerText = lastEntry.temperature;
        document.getElementById('city').innerText = lastEntry.city;
        document.getElementById('feelings').innerText = lastEntry.feelings;
        } catch(error){
            console.log('error', error);
    }
}