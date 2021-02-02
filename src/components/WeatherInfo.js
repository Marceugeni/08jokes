

function WeatherInfo ()  async e => {
    const ApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=barcelona&appid=6c35df700d93402106941f4d54f5a5a1`
    const Response = await fetch(ApiUrl);
    const WeatherData = await Response.json();
    /* console.log(WeatherData) */

    return(
        <div>
            <h4>{WeatherData}</h4>
        </div>
    )
}

export default Weatherinfo 