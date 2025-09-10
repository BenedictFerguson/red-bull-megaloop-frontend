import styled from 'styled-components';
import { CosmosText } from '@cosmos/web-scoped/react';

export const LiveScoringHeatAthleteLiveImpressionContainer = styled.div`
    width: 100%;
    margin-top: 16px;
`;

export const LiveScoringHeatAthleteLiveImpressionHeading= styled(CosmosText)`
`;

export const LiveScoringHeatAthleteLiveImpressionChart = styled.div`
    width: 100%;
    height: 80px;
    
    .recharts-xAxis line {
        stroke: #EFEFEF;
    }
`;

export const LiveScoringTooltipContainer = styled.div`
    background-color: white;
    border-radius: 8px;
    box-shadow: 0.0px 8.0px 12.0px 0px rgba(0, 15, 30, 0.04), 0.0px 2.0px 4.0px 0px rgba(0, 15, 30, 0.02);
    padding: 4px 8px;
`;

export const LiveScoringTooltipText = styled(CosmosText)``