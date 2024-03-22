const apiKey="0eee6a68f727ee0850d0c17bb3e01d70";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchValue = document.querySelector(".search input");
const searchBtn  =   document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiurl+city+`&appid=${apiKey}`);
     if(response.status==404){
        document.querySelector(".err").style.display="block";
        document.querySelector(".weather").style.display="none";
     }
     else{
        var data=await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
    
        if(data.weather[0].main== "Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
        }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".err").style.display="none";

     }

}  

searchBtn.addEventListener("click",()=>{
    checkWeather(searchValue.value);
})

