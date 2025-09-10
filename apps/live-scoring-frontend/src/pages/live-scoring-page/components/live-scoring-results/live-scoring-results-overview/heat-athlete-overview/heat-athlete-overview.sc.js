import styled from 'styled-components';
import {CosmosText} from "@cosmos/web-scoped/react";

export const HeatAthleteOverviewContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    gap: 10px;
    
    :not(:first-child){
        border-top: 1px #EFEFEF solid;
    }

`;

export const HeatAthleteScoreOverview = styled(CosmosText).attrs(()=> ({
    appearance: "dark",
    kind: "normal",
    size: "x-small",
    spacing: "none",
    weight: "regular"
}))`
`;