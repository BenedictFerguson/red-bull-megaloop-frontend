import styled from 'styled-components';
import {CosmosText} from "@cosmos/web-scoped/react";

export const AthleteCarousalCardContainer = styled.div`
    display: flex;
    flex-direction: column;

    border-radius: 8px;

    border: 1px #EFEFEF solid;
    box-shadow: 0px 8px 12px 0px rgba(0, 15, 30, 0.04),
    0px 2px 4px 0px rgba(0, 15, 30, 0.02);

    padding: var(--cosmos-spacing-x-loose, 32px);
    gap: 0px;
    opacity: 0px;
    background-color: #FFFFFF;
    
    @media only screen and (max-width: 650px) {
        padding: var(--cosmos-spacing-normal, 16px);
    }
`;

export const ImpressionScoreRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-bottom: #EFEFEF solid 1px;
    padding-bottom: var(--cosmos-spacing-tight, 12px) !important;
`;

export const TotalScoreRow = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: var(--cosmos-spacing-tight, 12px) !important;
`;

export const ScoreTypeText = styled(CosmosText).attrs(() => ({
    appearance: "dark",
    kind: "normal",
    size: 'x-small@small small@medium',
    spacing: "none",
    weight: "medium",
}))`
`;

export const ScoreText = styled(CosmosText).attrs(() => ({
    appearance: "dark",
    kind: "normal",
    size: 'small@small large@medium',
    spacing: "none",
    weight: "bold",
}))`
`;
