import './weather.styles.css';
import { useAppStore } from '@stores/app/app.store';
import type React from 'react';
import { useEffect } from 'react';
import {AppState} from "@stores/app/app.state.ts";
import {WeatherResultsService} from "@services/weather-results.service.ts";
import LatestWeatherComponent from "@pages/components/latest-weather/latest-weather.component.tsx";
import HistoricWeatherComponent from "@pages/components/historic-weather/historic-weather.component.tsx";

const WeatherPage: React.FC<Record<string, never>> = () => {
    const componentState = useAppStore((state: AppState) => state.componentState);
    const setComponentState = useAppStore((state: AppState) => state.setComponentState);

    return (
        <div
            className={`weather-container`}
        >
            <LatestWeatherComponent />
            <HistoricWeatherComponent />
            {/*{isLoading && <LoadingComponent />}*/}
            {/*{hasError && <ErrorComponent />}*/}
            {/*{isEventReady && <WeatherResultsComponent />}*/}
        </div>
    );
};

export default WeatherPage;
