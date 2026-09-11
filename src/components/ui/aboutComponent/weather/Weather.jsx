import "./Weather.css"



const Weather = () => {
    return(
        <div className="weatherDiv">
            <div className="weatherText">
                <h1>Our most <br /> advanced AI <br /> weather model</h1>
                <p>WeatherNext 3 delivers timely and localized <br /> predictions, bringing more reliable forecasts to <br /> products like Search, Gemini, and Maps.</p>
                <button className="btn2">Check it out</button>
            </div>
            
            <div className="weatherImage">
              <img src="./src/assets/images/weatherimage.webp" alt="weather picture" />
            </div>
         
        </div>
    )
}

export default Weather