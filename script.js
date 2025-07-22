// Accessing all required Element

let searchBox = document.getElementById("search");
let btn = document.querySelector("button");
let image = document.getElementById("image");
let temp = document.getElementById("temp");
let ul = document.getElementById("Suggestions-list");
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
    let api_url = `https://api.weatherapi.com/v1/current.json?key=861a4579321e4f819cf162557252107&q=${Location}`;
    let rawData = await fetch(api_url);
    let Data = await rawData.json();
    let temp_c =Data.current.temp_c;
    loc.innerText=Data.location.name;
    temp.innerHTML=`${Data.current.temp_c}<sup>&deg;c</sup>`;
    skelton_weatherInfo.classList.add("hidden");
    Suggestions_skelton.classList.add("hidden");
    weatherInfo.classList.remove("hidden");
    Suggestions.classList.remove("hidden");
    printSuggestions(temp_c);
}

let weatherTips = [
  // 0–10°C – Freezing Zone
  ["Wear thermal layers and insulated jackets", "Keep gloves and a woolen cap handy", "Drink warm beverages like hot soup or tea"],

  // 11–20°C – Cold & Damp Zone
  ["Wear a raincoat or windbreaker", "Carry an umbrella", "Opt for warm, nourishing foods"],

  // 21–30°C – Mild & Rainy Zone
  ["Keep a foldable umbrella in your bag", "Use breathable waterproof shoes", "Eat light yet warm meals like khichdi or broth"],

  // 31–40°C – Hot Zone
  ["Wear cotton and linen clothes", "Stay hydrated with water or lemon juice", "Use sunscreen and a cap to avoid sunburn"],

  // 41–50°C – Scorching Zone
  ["Stay indoors during peak afternoon hours", "Keep a wet towel or cooling band handy", "Drink electrolyte-rich fluids like ORS or coconut water"],

  // 51°C and above – Extreme Heat Zone
  ["Avoid outdoor activity entirely", "Use cooling aids like fans or cold compresses", "Eat hydrating foods like watermelon and cucumber"],
  ["Take Care Of Your Self"]
];

function suggestionCondition(temp_c){
    if(temp_c<=10){
        return 0;
    }else if(temp_c<=20){
        return 1;
    }else if(temp_c<=30){
        return 2;
    }else if(temp_c<=40){
        return 3;
    }else if(temp_c<=50){
        return 4;
    }else if(temp_c>50){
        return 5;
    }else{
        return 6;
    }
}
function  printSuggestions(temp_c) {
    ul.innerHTML = "";
    let tipIndex = suggestionCondition(temp_c)
    let tips =weatherTips[tipIndex];
    image.src=weatherImages[tipIndex];
    for(let tip of tips){
        let li = document.createElement("li");
        li.classList.add("list");
        li.innerText=tip;
        ul.appendChild(li);
    } 
}

weatherImages =["first.png","second.png","third.png","four.png","https://img.icons8.com/?&id=118631&format=png&color=000000","https://img.icons8.com/?&id=mUbVdgtBucQv&format=png&color=000000"]