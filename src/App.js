import React, {useState} from 'react';
 function App() {
  const [city,cityChange] = useState("")
  const [weatherTable, weatherTableChange] = useState([])
   return (
      <div>
        <input 
        placeholder="City Name"
        onChange={(e)=>{cityChange(e.target.value)}}
        ></input>
        <button onClick={() => {handleWeatherTable(weatherTableChange,city)}}></button>   
        {(weatherTable.cod===200)? 
        <p>{convertFromKelvinToCelsius(weatherTable.main.temp)}</p>: ""}
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

export default App;
