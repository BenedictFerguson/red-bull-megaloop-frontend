import React from 'react';
import './custom-weather-tooltip.styles.css'
import {
    TooltipContentProps,
} from 'recharts';
import { CosmosText } from '@cosmos/web-scoped/react';
import isNil from 'lodash/isNil';
import {
    convertWindDirectionInDegreesToCompassValues
} from '@shared/helpers/convert-wind-direction-in-degrees-to-compass-values.helper';
import { formatEpochTimeForTooltip } from '@pages/helpers/historic-graph.helpers';

const CustomWeatherTooltipComponent = ({ active, payload, label }: TooltipContentProps<any, any>) => {
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
                    { formatEpochTimeForTooltip(label as number) }
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

export default CustomWeatherTooltipComponent;
