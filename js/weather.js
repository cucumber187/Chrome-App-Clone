const API_KEY = "bcd579d7e1c6017938ed28c885c0d647";


function onGeoOk(position){

    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;

    console.log(lat);
    console.log(lng);
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${Math.round(data.main.temp - 273.15)}`;
        });
}

function onGeoError(){
    alert("Can't find you! No weather for you!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);