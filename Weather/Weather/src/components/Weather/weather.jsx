import React, { useEffect, useState } from "react";

const WeatherApp = ()=>{
    const[location,setLocation] = useState('')
    const [weather, setWeather] = useState({ })
    const[error, setError] = useState(false)

useEffect(()=>{
    if (location.length > 0) {
    getWeather(location)
    }
},[location])

const getWeather = async (location)=>{
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=YOUR_API_KEY`)
   
    setWeather(res.data)
    setError(false)
    
    } catch (error) {
        setError(true)
    }
}

const handleSubmit = (e)=>{
e.preventDefault()
setLocation (e.target.location.value)
}

const handleReset = ()=>{
    setLocation('');
    setWeather({});
    setError(false);
}
    return(
        <>
      <div>
       <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Enter location"
          required
        />
        <button type="submit">Get Weather</button>
      </form>
      </div>  
      {location.length > 0 && (
        <div>
      {error ? (
            <div>Error: Could not fetch weather data</div>
          ) : 
           <div>
              <h2>Weather for {location}</h2>
              <p>Temperature: {weather.main.temp}K</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>}
            </div>)}
            <button onClick={handleReset}>RESET</button>
           
</>
    )}
    export default WeatherApp