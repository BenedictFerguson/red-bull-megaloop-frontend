import './weather.styles.css';
import { useAppStore } from '@stores/app/app.store';
import type React from 'react';
import { useEffect } from 'react';
import {AppState} from "@stores/app/app.state.ts";
import {WeatherResultsService} from "@services/weather-results.service.ts";

const WeatherPage: React.FC<Record<string, never>> = () => {
    const componentState = useAppStore((state: AppState) => state.componentState);
    const setComponentState = useAppStore((state: AppState) => state.setComponentState);

    const apiUrl = useAppStore((state: AppState) => state.apiUrl);
    const assetId = useAppStore((state: AppState) => state.assetId);
    const tenantCredentials = useAppStore((state: AppState) => state.tenantCredentials);

    useEffect(() => {
        // EventService.getInstance().fetchEvents(apiUrl, assetId).then();
        // WeatherResultsService.getInstance().historicKsnWindResults()
        WeatherResultsService.getInstance().getLatestKsnWindWeatherData()
    }, [
        apiUrl,
        tenantCredentials,
    ]);

    return (
        <div
            className={`weather-container`}
        >
            {/*{isLoading && <LoadingComponent />}*/}
            {/*{hasError && <ErrorComponent />}*/}
            {/*{isEventReady && <WeatherResultsComponent />}*/}
        </div>
    );
};

export default WeatherPage;
