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
        console.log (event.target.textContent):
        var geocode
    })
})