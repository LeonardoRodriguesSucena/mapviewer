class WeatherAPIService {
    apiKey: string;
    baseUrl: string;
    
    constructor(baseUrl, apiKey) {
        this.baseUrl = baseUrl;
        this.apiKey = apiKey;
    }

    async getCurrentWeather(latitude, longitude) {
        const url = `${this.baseUrl}/current.json?key=${this.apiKey}&q=${latitude},${longitude}`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        } catch (e) {
            console.error("Error fetching weather data:", e);
            throw e;
        }
    }
}

export default WeatherAPIService;