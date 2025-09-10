import './weather.styles.css';
import type React from 'react';
import LatestWeatherComponent from '@pages/components/latest-weather/latest-weather.component';
import HistoricWeatherComponent from '@pages/components/historic-weather/historic-weather.component';

const WeatherPage: React.FC<Record<string, never>> = () => {
    return (
        <div className="weather-container">
            <LatestWeatherComponent />
            <HistoricWeatherComponent />
        </div>
    );
};

export default WeatherPage;