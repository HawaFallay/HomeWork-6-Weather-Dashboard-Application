const { response } = require("express");

var APIKey=("7cd28cdc86752667ee0f9fca0d5ad25e")
var searchButton = document.querySelector(".searchButton");
var inputBar = document.querySelector("#input");
var column1 = document.querySelector(".column1");
var cityNameAndDate = document.getElementById("cityName");
var dateToday = moment().format("MM/DD/YYYY");
var jelly = [];
console.log(jelly.length);

if(localStorage.getItem("history") !=null) {
    jelly =JSON.parse(localStorage.getItem("history"));
};
//get history from local storage
for (i=0;i < jelly.length; i++) {
    if(localStorage.getItem("history") != null) {
        var searcHistory = document.createElement('li');
        column1.appendChild(searcHistory);
        searcHistory.setAttribute("class", "searchHistory");
    }
};

document.querySelectorAll(".searchHistory").forEach(element =>{
    element.addEventListener("click", function(event){
        console.log (event.target.textContent);
        var geoCode = "https://api.openweathermap.org/geo/1.0/direct?q=" + event.target.textContent + "&limit=1&appid=7cd28cdc86752667ee0f9fca0d5ad25e";
        getCoordinates(geoCode);
        fiveDayForecast(geoCode);
        document.querySelector(".colum2").style.display = "block";
        document.querySelector(".placeholderText").sty.display = "none";
        cityNameAndDate.textContent = event.target.textContent + " " + "(" + dateToday + ")";
    })
});
//saves search history to local storage
searchButton.addEventListener('click', function (){
    jelly.push(inputBar.value);
    condsole.log(jelly);
    localStorage.setItem("history", JSON.stringify(jelly));

    var searchHistory = document.createElement('li');
    searcHistory.textContent = inputBar.value;
    column1.appendChild(searcHistory);
    searcHistory.setAttribute("class","searchHistory");
    cityNameAndDate.textContent = inputBar.value + " " + "(" + dateToday + ")";

    var geoCode = "https://api.openweathermap.org/geo/1.0/direct?q="+ inputBar.value + "&limit=1&appid=7cd28cdc86752667ee0f9fca0d5ad25e";
    getCoordinates(geoCode);
    fiveDayForecast(geoCode);
    document.querySelector(".column2").style.display = "block";
    document.querySelector(".placeholderText").style.display = "none";
}
);

//latitude and longitude
function getCoordinates(geoCode) {
    fetch(geoCode)
    .then (function(reponse) {
        console.log(reponse.status);
        return response.json();
    }
    )
.then(function(data){
    console.log(data);
    var lat = data[0].lat;
    var lon = data[0].lon;
    return fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=7cd28cdc86752667ee0f9fca0d5ad25e")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data);
            document.getElementById("iconToday").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";
            document.getElementById("tempToday").textContent = data.main.temp + "°F"
            document.getElementById("windToday").textContent = data.wind.speed + "MPH";
            document.getElementById("humidityToday").textContent = data.main.humidity + "%";
        
        }) 

    })
};

//Latitude and Longitude of city being searched

function fiveDayForecast(geoCode) {
    fetch(geoCode)
    .then(function(response) {
        console.log(response.status);
        return response.json();
    }
    )
.then(function(data) {
    console.log(data);
    var lat = data[0].lat;
    var lon = data[0].lon;
    return fetch ("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=7cd28cdc86752667ee0f9fca0d5ad25e")
        .then(function(response){
            return response.json();
        })
.then(function(data){
    console.log(data);
    document.getElementById("iconDay1").src = "https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"
    document.getElementById("date1").textContent = moment().add(1, 'days').format("MM/DD/YYY");
    document.getElementById("tempDay1").textContent = data.list[0].main.temp + "°F";
    document.getElementById("windDay1").textContent = data.list[0].main.wind.speed + "MPH";
    document.getElementById("humidityDay1").textContent = data.list[0].main.humidity + "%";

    document.getElementById("iconDay2").src = "https://openweathermap.org/img/wn/" + data.list[6].weather[0].icon + "@2x.png"
    document.getElementById("date2").textContent = moment().add(2, 'days').format("MM/DD/YYY");
    document.getElementById("tempDay2").textContent = data.list[6].main.temp + "°F";
    document.getElementById("windDay2").textContent = data.list[6].main.wind.speed + "MPH";
    document.getElementById("humidityDay2").textContent = data.list[6].main.humidity + "%";

    document.getElementById("iconDay3").src = "https://openweathermap.org/img/wn/" + data.list[14].weather[0].icon + "@2x.png"
    document.getElementById("date3").textContent = moment().add(3, 'days').format("MM/DD/YYY");
    document.getElementById("tempDay3").textContent = data.list[14].main.temp + "°F";
    document.getElementById("windDay3").textContent = data.list[14].main.wind.speed + "MPH";
    document.getElementById("humidityDay3").textContent = data.list[14].main.humidity + "%";

    document.getElementById("iconDay4").src = "https://openweathermap.org/img/wn/" + data.list[26].weather[0].icon + "@2x.png"
    document.getElementById("date4").textContent = moment().add(4, 'days').format("MM/DD/YYY");
    document.getElementById("tempDay4").textContent = data.list[26].main.temp + "°F";
    document.getElementById("windDay4").textContent = data.list[26].main.wind.speed + "MPH";
    document.getElementById("humidityDay4").textContent = data.list[26].main.humidity + "%";

    document.getElementById("iconDay5").src = "https://openweathermap.org/img/wn/" + data.list[30].weather[0].icon + "@2x.png"
    document.getElementById("date5").textContent = moment().add(5, 'days').format("MM/DD/YYY");
    document.getElementById("tempDay5").textContent = data.list[30].main.temp + "°F";
    document.getElementById("windDay5").textContent = data.list[30].main.wind.speed + "MPH";
    document.getElementById("humidityDay5").textContent = data.list[30].main.humidity + "%";

})


})
}