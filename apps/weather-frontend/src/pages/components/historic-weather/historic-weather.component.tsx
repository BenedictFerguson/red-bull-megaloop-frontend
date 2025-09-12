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
    YAxis } from 'recharts';
import { useAppStore} from '@stores/app/app.store';
import { AppState } from '@stores/app/app.state';
import { WeatherResultsService } from '@services/weather-results.service';
import { useHistoricWeatherStore } from '@stores/historic-weather/historic-weather.store';
import { HistoricWeatherState } from '@stores/historic-weather/historic-weather.state';
import CustomWeatherTooltipComponent from '@pages/components/custom-weather-tooltip/custom-weather-tooltip.component';
import { formatXAxis } from '@pages/helpers/historic-graph.helpers';
import { CosmosText } from '@cosmos/web-scoped/react';
import { CosmosTheme } from '@enums/cosmos-theme.enum';

interface HistoricalWeatherProps {
    height: string;
    inAccordion?: boolean;
}

const HistoricWeatherComponent = ({ height, inAccordion = false }: HistoricalWeatherProps) => {
    const apiUrl = useAppStore((state: AppState) => state.apiUrl);
    const tenantCredentials = useAppStore((state: AppState) => state.tenantCredentials);
    const theme = useAppStore((state: AppState) => state.theme);

    useEffect(() => {
        WeatherResultsService.getInstance().getHistoricKsnWindResults();
    }, [
        apiUrl,
        tenantCredentials,
    ]);

    const historicData = useHistoricWeatherStore((state: HistoricWeatherState) => state.data);
    const data = useMemo(() => historicData, [historicData]);

    // assumes only light theme is left
    const cartesianGridColour: string = theme === CosmosTheme.dark ? 'rgba(243,243,243,0.15)' : 'var(--cosmos-color-surface-glass-dark-5,rgba(0,15,30,0.05))';
    const areaColour: string = theme === CosmosTheme.dark ? 'rgba(217,217,217,0.16)' : 'rgba(27,106,238,0.2)';
    const lineColour: string = theme === CosmosTheme.dark ? 'var(--cosmos-color-surface-solid-dark,#00162B)' : 'var(--cosmos-color-accent-negative, #DB0A40)';

    return (
        <div
            className={`historic-weather-container ${theme}`}
            style={
                {
                    '--latest-weather-height': `${height}`,
                } as React.CSSProperties
            }
        >
            {
                !inAccordion &&  (<CosmosText
                    kind="subtle"
                    size="x-small"
                    spacing="none"
                    weight="regular"
                >
                    Historical Wind
                </CosmosText>)
            }
            <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        left: -10,
                    }}
                >
                    <CartesianGrid stroke={cartesianGridColour} />
                    <XAxis dataKey="date" tickFormatter={formatXAxis} tick={{fontSize: 12}} type="number"
                           scale="time"
                           domain={['dataMin', 'dataMax']}
                    />
                    <YAxis
                        label={{value: 'Knots', angle: -90, position: 'insideLeft', fontSize: 12,  offset: 20}}
                        tick={{fontSize: 12}}
                        domain={[0,dataMax => (Math.round(dataMax + 10))]}
                    />
                    <Tooltip content={CustomWeatherTooltipComponent}/>
                    <Area type="monotone" dataKey="gustSpeed" fill={areaColour} stroke={areaColour} unit=" Knots" name="Gust Speed"/>
                    <Line type="monotone" dataKey="windSpeed" stroke={lineColour} dot={false} strokeWidth={4} unit=" Knots" name="Wind Speed"/>
                </ComposedChart>
            </ResponsiveContainer>
        </div>
    );
};

export default HistoricWeatherComponent;
