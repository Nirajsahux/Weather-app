alert("Hello, I am a student specializing in Machine Learning and AI, and this is my first web development project. Please take this into account when reviewing my work.Thank you.");
const apikey = "7219b1fbc6c7c8d7669743d723ac1511";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon= document.querySelector(".weather-icon");

        async function checkWeather(city) {
            const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apikey}`;
            const response = await fetch(apiurl);

            if(response.status ==404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }else{
            
            var data = await response.json();

            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
            document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
            document.querySelector(".wind").innerHTML = data.wind.speed + ' km/hr';

            if (data.weather[0].main =="Clouds"){
                weatherIcon.src="images/clouds.png";

            }
            else if (data.weather[0].main =="Rain"){
                weatherIcon.src="images/rain.png";

            }
            else if (data.weather[0].main =="Clear"){
                weatherIcon.src="images/clear.png";

            }
            else if (data.weather[0].main =="Mist"){
                weatherIcon.src="images/mist.png";

            }
            else if (data.weather[0].main =="Drizzle"){
                weatherIcon.src="images/drizzle.png";

            }

            document.querySelector(".weather").style.display = "block";


        }}

        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });

   
        checkWeather('Delhi');