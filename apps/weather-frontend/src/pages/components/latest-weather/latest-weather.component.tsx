import React, {useEffect} from 'react';
import './latest-weather.styles.css'
import { WeatherResultsService } from '@services/weather-results.service';
import { useAppStore } from '@stores/app/app.store';
import { AppState } from '@stores/app/app.state';
import { CosmosIconImage, CosmosText } from '@cosmos/web-scoped/react';
import { useLatestWeatherStore } from '@stores/latest-weather/latest-weather.store';
import { LatestWeatherState } from '@stores/latest-weather/latest-weather.state';
import isEmpty from 'lodash/isEmpty';

type LatestWeatherProps = {

}

function convertWindDirectionInDegreesToCompassValues(angle: number) {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8;
    return directions[index];
}

const LatestWeatherComponent = ({}: LatestWeatherProps) => {
    const apiUrl = useAppStore((state: AppState) => state.apiUrl);
    const tenantCredentials = useAppStore((state: AppState) => state.tenantCredentials);

    const setResults = useLatestWeatherStore((state: LatestWeatherState) => state.setResults);

    const gustSpeed = useLatestWeatherStore((state: LatestWeatherState) => state.gustSpeed.current);
    const windSpeed = useLatestWeatherStore((state: LatestWeatherState) => state.windSpeed.current);
    const windDirection = useLatestWeatherStore((state: LatestWeatherState) => state.windDirection.current);
    const windChill = useLatestWeatherStore((state: LatestWeatherState) => state.windChill);
    const temperature = useLatestWeatherStore((state: LatestWeatherState) => state.temperature.actual);

    useEffect(() => {
        WeatherResultsService.getInstance().getLatestKsnWindWeatherData().then((value) => {
            if (isEmpty(value?.results)) {
                console.debug('No results found');
                return;
            }
            setResults(value?.results)
        })
    }, [
        apiUrl,
        tenantCredentials,
    ]);

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