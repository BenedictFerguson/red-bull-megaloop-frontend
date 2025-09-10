import styled from 'styled-components';
import {CosmosTitle} from '@cosmos/web-scoped/react';

export const LiveScoringResultsHeaderContainer = styled.div`
    width: 100%;
    margin-bottom: 32px;
`;

export const LiveScoringResultsTopHeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 12px;
`;

export const LiveScoringResultBottomHeaderContainer = styled.div`
    display: flex;
    background: white;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 8px 12px 0px rgba(0, 15, 30, 0.04), 0px 2px 4px 0px rgba(0, 15, 30, 0.02);
    gap: 8px;
`;

export const LiveScoringResultBottomHeaderRightContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    gap: 8px;
`;

export const LiveScoringResultBottomHeaderLeftContainer = styled.div`
    display: flex;
`;

export const LiveScoringResultsHeaderTitle = styled(CosmosTitle).attrs(() => ({
    appearance: "dark",
    kind: "normal",
    size: 'medium@small large@medium',
    spacing: "none",
    weight: "bold",
}))`
    border-left: 6px #DB0A40 solid;
    padding-left: 20px
`;

export const ResultsHeaderRightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`

export const LiveScoringResultDesktopSectionContainer = styled.div`
    display: none;
    width: 100%;

    @media only screen and (min-width: 650px) {
        display: flex;
    }
`

export const LiveScoringResultMobileSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
    
    @media only screen and (min-width: 650px) {
        display: none;
    }
`

export const LiveScoringResultsHeaderTimerContainer = styled.div``
