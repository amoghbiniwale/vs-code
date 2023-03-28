function getWeather(){
    event.preventDefault();
//d1505c2b2c3084ff6e3ef58808105a43
let city = document.getElementById("city").value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d1505c2b2c3084ff6e3ef58808105a43`;
fetch(url).then(response => response.json())
.then((data)=> {
    document.getElementById("result").textContent = `weather in ${city} is ${data.main.temp -273.15} C`;  
});

}
