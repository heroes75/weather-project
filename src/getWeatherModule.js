//import DOMDisplay from "./HTMLModule.js";

function getWeather () {
    
    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const  fetchFunc = async () => {
            try {
                const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${document.querySelector("input").value}?key=NWYKBRHN58H7K24T473CQUHM8
                `);
                const result = await response.json();
                const {default: icon} = await import(`./WeatherIcons/SVG/1st Set - Color/${result.currentConditions.icon}.svg`)
                document.body.style.backgroundImage = `url(${icon})`;
                document.getElementById("city-name").textContent = result.resolvedAddress;
                document.getElementById("temperature").textContent = "Temperature in Celsius: " + Math.floor((result.currentConditions.temp - 32) * 5/9);
                document.getElementById("wind").textContent = "Windspeed: " +  result.currentConditions.windspeed;
                document.getElementById("humidity").textContent = "Humidity: " +  result.currentConditions.humidity;
                document.getElementById("time").textContent = result.currentConditions.conditions;
            } catch (error) {
                console.log(error);
                document.getElementById("city-name").textContent = "city no found";
                document.getElementById("temperature").textContent = "Temperature in Celsius: ";
                document.getElementById("wind").textContent = "Windspeed: ";
                document.getElementById("humidity").textContent = "Humidity: ";
                document.getElementById("time").textContent = "";
            }
        }
        fetchFunc()
    })
}

export default getWeather;