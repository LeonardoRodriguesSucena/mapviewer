import React, { useState, useEffect } from 'react';
import WeatherAPIService from "../Infrastructure/api/weatherApiService";
import styles from "../styles/weather.module.css"

//Component to show weather information
//Weather
const WeatherComponent = ({ latitude, longitude }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const weatherService = new WeatherAPIService(process.env.NEXT_PUBLIC_WEATHER_API_BASE_URL, 
                                                 process.env.NEXT_PUBLIC_WEATHER_API_KEY); 
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const data = await weatherService.getCurrentWeather(latitude, longitude);
                setWeatherData(data);
            } 
            catch (e) {
                setError(e.message);
            } 
            finally {
                setLoading(false);
            }
        };

        fetchWeather();
    }, [latitude, longitude]);

    if (loading) return <p><i>Loading weather data...</i></p>;
    if (error) return <p><i>No weather information</i></p>;

    return (
        <>
            {weatherData && (
                <div>
                    <div>
                        <h3>Weather in {weatherData.location.name}</h3></div>
                        <div className={styles.div_img}>
                            <i>{weatherData.current.condition.text}</i>
                            <img src={weatherData.current.condition.icon} className={styles.img_weather}></img>
                            {weatherData.current.temp_c}°C
                        </div>
                </div>
            )}
        </>
    );
};

export default WeatherComponent;