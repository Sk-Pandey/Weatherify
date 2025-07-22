// Accessing all required Element

let searchBox = document.getElementById("search");
let btn = document.querySelector("button");
let image = document.getElementById("image");
let temp = document.getElementById("temp");
let Suggestions_list = document.getElementById("Suggestions-list");
let loc = document.getElementById("location");


let skelton_weatherInfo = document.getElementById("skelton-weatherInfo");
let weatherInfo = document.getElementById("weatherInfo");

let Suggestions = document.getElementById("Suggestions");
let Suggestions_skelton = document.getElementById("Suggestions_skelton");

btn.addEventListener("click",()=>{
    if(searchBox.value.trim()!==""){
        weatherInfo.classList.add("hidden");
        Suggestions.classList.add("hidden");
        skelton_weatherInfo.classList.remove("hidden");
        Suggestions_skelton.classList.remove("hidden");
        let Location= searchBox.value.trim();
        weather(Location);
    }
})
 
async function weather(Location) {
    let api_url = `http://api.weatherapi.com/v1/current.json?key=861a4579321e4f819cf162557252107&q=${Location}&aqi=no`;
    let rawData = await fetch(api_url);
    let Data = await rawData.json();
    loc.innerText=Data.location.name;
    temp.innerHTML=`${Data.current.temp_c}<sup>&deg;c</sup>`;
    skelton_weatherInfo.classList.add("hidden");
    Suggestions_skelton.classList.add("hidden");
    weatherInfo.classList.remove("hidden");
    Suggestions.classList.remove("hidden");
}
