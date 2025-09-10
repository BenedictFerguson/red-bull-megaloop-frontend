import React from 'react';
import PropTypes from 'prop-types';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, CartesianAxis } from 'recharts';
import {
    LiveScoringHeatAthleteLiveImpressionChart,
    LiveScoringHeatAthleteLiveImpressionContainer,
    LiveScoringHeatAthleteLiveImpressionHeading, LiveScoringTooltipContainer, LiveScoringTooltipText,
} from './live-scoring-heat-athlete-live-impression.sc';

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <LiveScoringTooltipContainer>
                <LiveScoringTooltipText appearance="dark" size="x-small">{payload[0].value}</LiveScoringTooltipText>
            </LiveScoringTooltipContainer>
        );
    }

    return null;
};

const LiveScoringHeatAthleteLiveImpression = ({ liveImpressionScores }) => {
    const chartData = liveImpressionScores.map((score, index) => {
        return {
            score,
            index,
        };
    });
    return (
        <LiveScoringHeatAthleteLiveImpressionContainer>
            <LiveScoringHeatAthleteLiveImpressionHeading size="small" spacing="none" tag="p" weight="medium"
                                                         appearance="dark" kind="subtle">Live
                Impression</LiveScoringHeatAthleteLiveImpressionHeading>
            <LiveScoringHeatAthleteLiveImpressionChart>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                        <XAxis tick={false}/>
                        <Tooltip content={<CustomTooltip />} />
                        <Line dataKey="score" stroke="#1B6AEE" dot={true} strokeWidth={6} />
                    </LineChart>
                </ResponsiveContainer>
            </LiveScoringHeatAthleteLiveImpressionChart>
        </LiveScoringHeatAthleteLiveImpressionContainer>
    );
};

LiveScoringHeatAthleteLiveImpression.propTypes = {
    liveImpressionScores: PropTypes.array,
};

export default LiveScoringHeatAthleteLiveImpression;
