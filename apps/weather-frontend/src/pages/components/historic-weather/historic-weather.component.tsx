import React, {useEffect, useMemo} from 'react';
import './historic-weather.styles.css'
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { useAppStore} from '@stores/app/app.store';
import { AppState} from '@stores/app/app.state';
import { WeatherResultsService } from '@services/weather-results.service';
import { useHistoricWeatherStore } from '@stores/historic-weather/historic-weather.store';
import { HistoricWeatherState } from '@stores/historic-weather/historic-weather.state';

const HistoricWeatherComponent = () => {
    const apiUrl = useAppStore((state: AppState) => state.apiUrl);
    const tenantCredentials = useAppStore((state: AppState) => state.tenantCredentials);

    useEffect(() => {
        WeatherResultsService.getInstance().getHistoricKsnWindResults();
    }, [
        apiUrl,
        tenantCredentials,
    ]);

    const historicData = useHistoricWeatherStore((state: HistoricWeatherState) => state.data);
    const data = useMemo(() => historicData, [historicData]);

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
                    <Area type="monotone" dataKey="gustSpeed" fill="#8884d8" stroke="#8884d8" />
                    <Line type="monotone" dataKey="windSpeed" stroke="#ff7300" />
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HistoricWeatherComponent;
