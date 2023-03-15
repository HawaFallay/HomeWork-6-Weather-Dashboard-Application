const { response } = require("express");

var APIKey= ("7cd28cdc86752667ee0f9fca0d5ad25e")
var searchButton = document.querySelector (".searchButton");
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
        column1.appendChild(searcHistory):
        searcHistory.setAttribute("class", "searchHistory"):
    }
}:

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
functio getCoordinates(geoCode) {
    fetch(geoCode)
    .then (function(reponse) {
        console.log(reponse.status);
        return response.json();
    }
}
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
            document.getElementById("iconToday").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png":
            document.getElementById("tempToday").textContent = data.main.temp + ""
            document.getElementById("windToday").textContent = data.
            document.getElementById("humidityToday").textContent = data.
        })  document.
})