
import './App.css';
import {useState} from "react";

const api = {
  key: '49ec060eb1c2de437d6b448636566a87',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});
  const clickHandler = ()=>{
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>{
      setWeather(result);
      console.log(result);
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Weather App</h1>
          {/* input */}
            <input type="text" 
            placeholder='Enter your City/ Town/ Villege..'
            onChange = {e=>setSearch(e.target.value)}
            />
            <button
            onClick={clickHandler}>Submit</button>
        </div>

      {typeof weather.main!= 'undefined' ? (
        <div>
        {/* Location */}
        <h2>{weather.name}, {weather.sys.country}</h2>
        {/* Temp */}
        <p>{weather.main.temp}° C | Max: {weather.main.temp_max}° C | Min: {weather.main.temp_min}° C </p>
        <p>Humidity: {weather.main.humidity}</p>
        {/* Condition */}
        <p>{weather.weather[0].main}</p>
        <p>{weather.weather[0].description}</p>
        </div>
      ):(
        ""
      )}  
      </header>
    </div>
  );
}

export default App;
