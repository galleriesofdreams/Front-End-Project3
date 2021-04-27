/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const zip = document.getElementById('zip').value;

// Personal API Key for OpenWeatherMap API
const apiKey = '&units=metric&appid=5c1405ed481a64d7eced83e04661eb67';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', generateWeather);

/* Function called by event listener */
function generateWeather(e){
    getWeather (baseURL, zip, apiKey)
}

const zip = async
/* Function to GET Web API Data*/


/* Function to POST data */

{
    method: 'POST',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    //Body data type must match Content-Type
    body: JSON.stringify(projectData),
}

/* Function to GET Project Data */