import React, {useState} from 'react';
import "./App.css"
 function App() {
  const [city,cityChange] = useState("")
  const [weatherTable, weatherTableChange] = useState([])
   return (
      <div id="App">
        <input 
        placeholder="City Name"
        onChange={(e)=>{cityChange(e.target.value)}}
        ></input>
        <button  
        onClick={() => {handleWeatherTable(weatherTableChange,city)} 
        }
        id="checkCityButton">Check Weather</button>   
        {(weatherTable.cod===200)? returnData(weatherTable)
        : ""}
      </div>
  )
}
async function handleWeatherTable(weatherTableChange,city){
  weatherTableChange(await fetch('https://floating-harbor-57133.herokuapp.com/api-connection?city='+city)
  .then(res => res.json()))
}

function convertFromKelvinToCelsius(degree){
  return degree-273.15;
}

function returnData(weatherTable){
  return (<div>
  <p>{convertFromKelvinToCelsius(weatherTable.main.temp).toFixed(1)}</p>
  <p>{convertFromKelvinToCelsius(weatherTable.main.feels_like).toFixed(1)}</p>
  <p>{convertFromKelvinToCelsius(weatherTable.main.temp_min).toFixed(1)}</p>
  <p>{convertFromKelvinToCelsius(weatherTable.main.temp_max).toFixed(1)}</p>
  <p>{(weatherTable.main.pressure).toFixed(1)}</p>
  <p>{(weatherTable.main.humidity).toFixed(1)}</p>
  </div>)
}

document.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("checkCityButton").click();
  }
});

export default App;
