import React, {useEffect} from 'react';
import './latest-weather.styles.css'
import { WeatherResultsService } from '@services/weather-results.service';
import { useAppStore } from '@stores/app/app.store';
import { AppState } from '@stores/app/app.state';
import { CosmosIconImage, CosmosSpinner, CosmosText } from '@cosmos/web-scoped/react';
import { useLatestWeatherStore } from '@stores/latest-weather/latest-weather.store';
import { LatestWeatherState } from '@stores/latest-weather/latest-weather.state';
import {
    convertWindDirectionInDegreesToCompassValues
} from '@shared/helpers/convert-wind-direction-in-degrees-to-compass-values.helper';

const LatestWeatherComponent: React.FC = () => {
    const apiUrl = useAppStore((state: AppState) => state.apiUrl);
    const tenantCredentials = useAppStore((state: AppState) => state.tenantCredentials);

    useEffect(() => {
        WeatherResultsService.getInstance().getLatestKsnWindWeatherData();
    }, [
        apiUrl,
        tenantCredentials,
    ]);

    const isLoadingLatestWeather = useLatestWeatherStore((state: LatestWeatherState) => state.isLoading);
    const gustSpeed = useLatestWeatherStore((state: LatestWeatherState) => state.gustSpeed.current);
    const windSpeed = useLatestWeatherStore((state: LatestWeatherState) => state.windSpeed.current);
    const windDirection = useLatestWeatherStore((state: LatestWeatherState) => state.windDirection.current);
    const windChill = useLatestWeatherStore((state: LatestWeatherState) => state.windChill);
    const temperature = useLatestWeatherStore((state: LatestWeatherState) => state.temperature.actual);

    if (isLoadingLatestWeather) {
        return (
            <div className="latest-weather-container h-[300px] justify-center">
                <CosmosSpinner appearance="light" />
            </div>
        )
    }

    return (
        <div className="latest-weather-container">
            <div className="wind-direction-container">
                <CosmosText
                    appearance="light"
                    kind="subtle"
                    size="x-small"
                    spacing="none"
                    weight="regular"
                >
                    Wind Direction
                </CosmosText>
                <div><CosmosIconImage /></div>
                <CosmosText
                    appearance="light"
                    kind="normal"
                    size="small"
                    spacing="none"
                    weight="bold"
                >
                    { convertWindDirectionInDegreesToCompassValues(windDirection) }
                </CosmosText>
            </div>
            <div className="wind-speed-status-container">
                <CosmosText appearance="light" kind="subtle" weight="regular" size="x-small">Wind Speed Status</CosmosText>
                <div className="wind-speed-status-bar"></div>
            </div>
            <div className="separator"></div>
            <div className="wind-data-row">
                <div>
                    <CosmosText
                        appearance="light"
                        kind="subtle"
                        size="x-small"
                        spacing="none"
                        weight="regular"
                    >
                        Wind Speed
                    </CosmosText>
                    <CosmosText
                        appearance="light"
                        kind="normal"
                        size="small"
                        spacing="none"
                        weight="bold"
                    >
                        { Math.round(windSpeed * 10)/10 } Knots
                    </CosmosText>
                </div>
                <div>
                    <CosmosText
                        appearance="light"
                        kind="subtle"
                        size="x-small"
                        spacing="none"
                        weight="regular"
                    >
                        Gust Speed
                    </CosmosText>
                    <CosmosText
                        appearance="light"
                        kind="normal"
                        size="small"
                        spacing="none"
                        weight="bold"
                    >
                        { Math.round(gustSpeed * 10)/10 } Knots
                    </CosmosText>
                </div>
            </div>
            <div className="wind-data-row">
                <div>
                    <CosmosText
                        appearance="light"
                        kind="subtle"
                        size="x-small"
                        spacing="none"
                        weight="regular"
                    >
                        Temperature
                    </CosmosText>
                    <CosmosText
                        appearance="light"
                        kind="normal"
                        size="small"
                        spacing="none"
                        weight="bold"
                    >
                        { temperature } C
                    </CosmosText>
                </div>
                <div>
                    <CosmosText
                        appearance="light"
                        kind="subtle"
                        size="x-small"
                        spacing="none"
                        weight="regular"
                    >
                        WindChill
                    </CosmosText>
                    <CosmosText
                        appearance="light"
                        kind="normal"
                        size="small"
                        spacing="none"
                        weight="bold"
                    >
                        { windChill } C
                    </CosmosText>
                </div>
            </div>
        </div>)
}

export default React.memo(LatestWeatherComponent);