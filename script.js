let input = document.getElementById("input");

let city = document.getElementById("city");

let date = document.getElementById("date");

let currentTemp = document.getElementById("temp");

let minMax = document.getElementById("minMax");

let weatherType = document.getElementById("weatherType");

let weatherIcon = document.getElementById("img");


let form = document.getElementById('form')




let apiInfo = {
  url: "https://api.openweathermap.org/data/2.5/weather?q=",
  key: "96fd261d5d12956bb522769bba17382b",
};



let getWeatherData = async (inputValue) => {
  try {
    let res = await fetch(
      `${apiInfo.url}${inputValue}&appid=${apiInfo.key}&units=metric`
    );

    let data = await res.json();
    console.log(data);

    let { weather, main, sys, name } = data;
if(name)



{
    city.innerText = name;

    date.innerText = new Date().toLocaleDateString();
    currentTemp.innerText = main.temp.toString().slice(0, 2) + "°c";

    minMax.innerText =
      Math.floor(main.temp_min) + "/" + Math.ceil(main.temp_max)+'°c';

    weatherType.innerText = weather[0].main;

    weatherIcon.src = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

}
 else{
   city.innerText = 'city not found'
 }


  } catch (error) {
    console.log(error);
  }
};


getWeatherData("kolkata");

input.addEventListener('keyup',(pri)=>{

  
  getWeatherData(input.value);
  

})


