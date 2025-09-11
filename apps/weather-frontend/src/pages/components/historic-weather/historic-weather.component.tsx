import React, { useEffect, useMemo } from 'react';
import './historic-weather.styles.css'
import {
    Area,
    CartesianGrid,
    ComposedChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';
import { useAppStore } from '@stores/app/app.store';
import { AppState } from '@stores/app/app.state';
import { WeatherResultsService } from '@services/weather-results.service';
import { useHistoricWeatherStore } from '@stores/historic-weather/historic-weather.store';
import { HistoricWeatherState } from '@stores/historic-weather/historic-weather.state';
import CustomWeatherTooltipComponent
    from '@pages/components/custom-weather-tooltip/custom-weather-tooltip.component';
import { formatXAxis } from '@pages/helpers/historic-graph.helpers';
import {CosmosText} from "@cosmos/web-scoped/react";

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
            <CosmosText
                appearance="light"
                kind="subtle"
                size="x-small"
                spacing="none"
                weight="regular"
            >
                Historical Wind
            </CosmosText>
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    // margin={{
                    //     top: 40,
                    //     right: 40,
                    //     bottom: 40,
                    //     left: 20,
                    // }}
                >
                    <CartesianGrid stroke="rgba(243,243,243,0.15)" />
                    <XAxis dataKey="date" tickFormatter={formatXAxis} tick={{fontSize: 12}} type="number"
                           scale="time"
                           domain={['dataMin', 'dataMax']}
                    />
                    <YAxis label={{value: 'Knots', angle: -90, position: 'insideLeft', fontSize: 12}} tick={{fontSize: 12}} />
                    <Tooltip content={CustomWeatherTooltipComponent}/>
                    <Area type="monotone" dataKey="gustSpeed" fill="rgba(217,217,217,0.16)" stroke="rgba(217,217,217,0.16)" unit=" Knots" name="Gust Speed"/>
                    <Line type="monotone" dataKey="windSpeed" stroke="rgb(0,22,43)" dot={false} strokeWidth={4} unit=" Knots" name="Wind Speed"/>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HistoricWeatherComponent;
