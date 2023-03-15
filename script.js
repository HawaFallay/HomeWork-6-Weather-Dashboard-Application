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

for (i=0;i < jelly.length; i++) {
    if(localStorage.getItem("history") != null) {
        var searcHistory
    }
}