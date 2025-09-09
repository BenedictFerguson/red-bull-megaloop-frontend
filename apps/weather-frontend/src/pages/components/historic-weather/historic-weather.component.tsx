import React, {useEffect, useMemo} from 'react';
import './historic-weather.styles.css'
import {
    Area,
    CartesianGrid,
    ComposedChart,
    Line,
    ResponsiveContainer,
    Tooltip,
    TooltipContentProps,
    XAxis,
    YAxis,
} from 'recharts';
import { useAppStore } from '@stores/app/app.store';
import { AppState } from '@stores/app/app.state';
import { WeatherResultsService } from '@services/weather-results.service';
import { useHistoricWeatherStore } from '@stores/historic-weather/historic-weather.store';
import { HistoricWeatherState } from '@stores/historic-weather/historic-weather.state';
import { CosmosText } from '@cosmos/web-scoped/react';
import isNil from 'lodash/isNil';
import {
    convertWindDirectionInDegreesToCompassValues
} from '@shared/helpers/convert-wind-direction-in-degrees-to-compass-values.helper';

const CustomTooltip = ({ active, payload, label }: TooltipContentProps<any, any>) => {
    if (active && payload && payload.length) {
        const windDirectionDegrees = payload[0]?.payload?.windDirection;
        let windDirectionElement = null;
        if (!isNil(windDirectionDegrees)) {
            windDirectionElement = (
                <div>
                    <CosmosText
                        appearance="dark"
                        kind="subtle"
                        size="xx-small"
                        spacing="none"
                        weight="regular"
                    >
                        Wind Direction
                    </CosmosText>
                    <CosmosText
                        appearance="dark"
                        kind="normal"
                        size="x-small"
                        spacing="none"
                        weight="bold"
                    >
                        { convertWindDirectionInDegreesToCompassValues(windDirectionDegrees) }
                    </CosmosText>
                </div>
            )
        }

        return (
            <div className="tooltip-container">
                <CosmosText
                    appearance="dark"
                    kind="subtle"
                    size="xx-small"
                    spacing="none"
                    weight="regular"
                >
                    {
                        new Date(label).toLocaleString()
                    }
                </CosmosText>
                { windDirectionElement }
                <div className="tooltip-data-row">
                    {
                        payload.map((data)=> (
                            <div>
                                <CosmosText
                                    appearance="dark"
                                    kind="subtle"
                                    size="xx-small"
                                    spacing="none"
                                    weight="regular"
                                >
                                    {data.name}
                                </CosmosText>
                                <CosmosText
                                    appearance="dark"
                                    kind="normal"
                                    size="x-small"
                                    spacing="none"
                                    weight="bold"
                                >
                                    { typeof data.value === 'number' ? Math.round(data.value * 10)/10 : data.value }{ data.unit ? data.unit : null }
                                </CosmosText>
                            </div>
                        ))
                    }
                </div>

            </div>
        );
    }

    return null;
};

const formatXAxis = (tickItem) => {
    const date = new Date(tickItem);
    return date.toLocaleDateString('en-US', { day: 'numeric',  month: 'short', hour: "numeric", minute:"numeric"});
};

// const CustomizedAxisTick = ({ x, y, stroke, payload }) => {
//     return (
//         <g transform={`translate(${x},${y})`}>
//             <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
//                 {payload.value}
//             </text>
//         </g>
//     );
// };

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
                        top: 40,
                        right: 40,
                        bottom: 40,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="rgba(243,243,243,0.15)" />
                    <XAxis dataKey="date" tickFormatter={formatXAxis} tick={{fontSize: 12}} type="number"
                           scale="time"
                           domain={['dataMin', 'dataMax']} />
                    <YAxis label={{value: 'Knots', angle: -90, position: 'insideLeft', fontSize: 12}} tick={{fontSize: 12}} />
                    <Tooltip content={CustomTooltip}/>
                    <Area type="monotone" dataKey="gustSpeed" fill="rgba(217,217,217,0.16)" stroke="rgba(217,217,217,0.16)" unit=" Knots" name="Gust Speed"/>
                    <Line type="monotone" dataKey="windSpeed" stroke="rgb(0,22,43)" dot={false} strokeWidth={4} unit=" Knots" name="Wind Speed"/>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HistoricWeatherComponent;
