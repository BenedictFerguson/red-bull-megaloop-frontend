import React, {useEffect} from 'react';
import './latest-weather.styles.css'
import { WeatherResultsService } from '@services/weather-results.service';
import { useAppStore } from '@stores/app/app.store';
import { AppState } from '@stores/app/app.state';
import {
    CosmosSpinner,
    CosmosText
} from '@cosmos/web-scoped/react';
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

    const compassLength = 64;

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
                <div className="compass-container">
                    <svg width={compassLength} height={compassLength} viewBox={`0 0 ${compassLength} ${compassLength}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M31.6165 18.8743L22.0904 43.7598C21.9342 44.1684 22.3841 44.5432 22.7577 44.3155L31.7716 38.8181C31.9187 38.728 32.104 38.7283 32.2511 38.8191L41.2408 44.3501C41.6135 44.5798 42.0652 44.2065 41.9102 43.797L32.4741 18.876C32.3245 18.4816 31.7672 18.4805 31.6165 18.8743Z" fill="white" transform={`rotate(${windDirection},${compassLength/2},${compassLength/2})`}/>
                        <path d="M32 59.2478C47.3039 59.2478 59.7102 46.8247 59.7102 31.5C59.7102 16.1753 47.3039 3.7522 32 3.7522C16.6961 3.7522 4.28976 16.1753 4.28976 31.5C4.28976 46.8247 16.6961 59.2478 32 59.2478Z" stroke="url(#paint0_linear_171_4213)" stroke-width="6.25" stroke-miterlimit="1"/>
                        <path d="M30.3494 12.1794V7.93945H31.2944L32.7875 10.7115V7.93945H33.6506V12.1794H32.7245L31.2125 9.36325V12.1794H30.3494Z" fill="white"/>
                        <defs>
                            <linearGradient id="paint0_linear_171_4213" x1="22.4826" y1="43.6972" x2="14.86" y2="51.3199" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FBFCFF"/>
                                <stop offset="0.408" stop-color="#FFCE50"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
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
                <div className="wind-speed-status-bar windspeed-bar">
                    <svg width="100%" height="15" viewBox="0 0 100% 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="11" y="0" width="2" height="15" fill="#F3F3F3" fill-opacity="0.15"/>
                        <rect x="81" y="0" width="2" height="15" fill="#F3F3F3" fill-opacity="0.15"/>
                        <rect x="151" y="0" width="2" height="15" fill="#F3F3F3" fill-opacity="0.15"/>
                        <rect x="291" y="0" width="2" height="15" fill="#F3F3F3" fill-opacity="0.15"/>
                        <rect x="361" y="0" width="2" height="15" fill="#F3F3F3" fill-opacity="0.15"/>
                        <g transform={`translate(${(windSpeed/70)*100} 0)`}>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.79 17.21L5.50999 22.49C5.42595 22.5757 5.4011 22.7033 5.4468 22.8142C5.4925 22.9252 5.59997 22.9983 5.71999 23H16.28C16.4 22.9983 16.5075 22.9252 16.5532 22.8142C16.5989 22.7033 16.574 22.5757 16.49 22.49L11.21 17.21C11.1553 17.1525 11.0794 17.12 11 17.12C10.9206 17.12 10.8447 17.1525 10.79 17.21Z" fill="#FFCB37" transform="matrix(1, 0, 0, 1, 0, -8.000000000000002)"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.79 13.79L5.50999 8.51C5.42595 8.42429 5.4011 8.29674 5.4468 8.18575C5.4925 8.07476 5.59997 8.00169 5.71999 8H16.28C16.4 8.00169 16.5075 8.07476 16.5532 8.18575C16.5989 8.29674 16.574 8.42429 16.49 8.51L11.21 13.79C11.1553 13.8475 11.0794 13.88 11 13.88C10.9206 13.88 10.8447 13.8475 10.79 13.79Z" fill="#FFCB37" transform="matrix(1, 0, 0, 1, 0, -8.000000000000002)"/>
                        </g>
                    </svg>
                </div>
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