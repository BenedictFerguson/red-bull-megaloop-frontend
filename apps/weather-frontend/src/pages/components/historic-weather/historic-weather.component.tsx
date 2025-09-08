import React, {useEffect, useMemo} from 'react';
import './historic-weather.styles.css'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
} from 'recharts';
import {useAppStore} from "@stores/app/app.store.tsx";
import {AppState} from "@stores/app/app.state.ts";
import {WeatherResultsService} from "@services/weather-results.service.ts";
import isEmpty from "lodash/isEmpty";
import {useHistoricWeatherStore} from "@stores/historic-weather/historic-weather.store.tsx";
import {HistoricWeatherState} from "@stores/historic-weather/historic-weather.state.ts";

const HistoricWeatherComponent = () => {
    const apiUrl = useAppStore((state: AppState) => state.apiUrl);
    const tenantCredentials = useAppStore((state: AppState) => state.tenantCredentials);
    const setData = useHistoricWeatherStore((state: HistoricWeatherState) => state.setData);
    const historicData = useHistoricWeatherStore((state: HistoricWeatherState) => state.data);

    const data = useMemo(() => historicData);
    useEffect(() => {
        WeatherResultsService.getInstance().historicKsnWindResults().then((value) => {
            if (isEmpty(value)) {
                console.debug('No data returned');
                return;
            }
            setData(value);
        }, (rejected) => {})
    }, [
        apiUrl,
        tenantCredentials,
    ]);

    return (
        <div className="historic-weather-container">
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 20,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="dateTime" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="windSpeed" fill="#8884d8" stroke="#8884d8" />
                    <Line type="monotone" dataKey="gustSpeed" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HistoricWeatherComponent;
