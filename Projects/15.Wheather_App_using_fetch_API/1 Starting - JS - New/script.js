let searchButton = document.querySelector('.search button');
let inputBox = document.querySelector('.search input');
let weatherIcon = document.querySelector('.weather-icon');
let temperature = document.querySelector('.temp');
let cityNmae = document.querySelector('.city')
let Humidity = document.querySelector('.humidity');
let windSpeed = document.querySelector('.col');


async function fetchData(fetchURL){
    let response = await fetch(fetchURL)
    let data =await response.json()
    console.log(data);

    
    console.log(data.weather[0].main);
    let environment = data.weather[0].main
    weatherIcon.src = `images/${environment}.png`;

    

    console.log(Math.round(data.main.temp))
    temperature.textContent =Math.round(data.main.temp) + "°C"

    console.log(data.name)
    cityNmae.textContent = data.name;

    console.log(data.main.humidity)
    Humidity.textContent = data.main.humidity + "%";


    console.log(data.wind.speed)
    windSpeed.textContent = data.wind.speed + "km/h";
}

// fetchData()
searchButton.addEventListener('click',() =>{
    let city = inputBox.value;
    console.log(city);
    let fetchURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b951973a7e900da5e4d084b335b6dbac`;
    console.log(fetchURL);

    fetchData(fetchURL);

})

