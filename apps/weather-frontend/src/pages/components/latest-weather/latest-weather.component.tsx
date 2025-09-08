import React, {useEffect} from "react";
import './latest-weather.styles.css'
import {WeatherResultsService} from "@services/weather-results.service.ts";
import {useAppStore} from "@stores/app/app.store.tsx";
import {AppState} from "@stores/app/app.state.ts";

type LatestWeatherProps = {

}

const LatestWeatherComponent = ({}: LatestWeatherProps) => {
    const apiUrl = useAppStore((state: AppState) => state.apiUrl);
    const tenantCredentials = useAppStore((state: AppState) => state.tenantCredentials);

    useEffect(() => {
        // EventService.getInstance().fetchEvents(apiUrl, assetId).then();
        // WeatherResultsService.getInstance().historicKsnWindResults()
        WeatherResultsService.getInstance().getLatestKsnWindWeatherData()
    }, [
        apiUrl,
        tenantCredentials,
    ]);

    return (<div className="latest-weather-container">Latest weather component placeholder</div>)
}

export default React.memo(LatestWeatherComponent);