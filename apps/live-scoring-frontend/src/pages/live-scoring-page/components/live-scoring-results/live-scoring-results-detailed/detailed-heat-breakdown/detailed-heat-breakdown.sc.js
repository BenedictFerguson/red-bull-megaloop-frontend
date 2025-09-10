import styled from 'styled-components';
import {CosmosText, CosmosTitle} from "@cosmos/web-scoped/react";

export const DetailedResultBreakdownContainer = styled.div`
    background-color: #fff;
    box-shadow: 0px 8px 12px 0px rgba(0, 15, 30, 0.04), 0px 2px 4px 0px rgba(0, 15, 30, 0.02);
    border-radius: 8px;
    padding: 16px;
    overflow: hidden;
`;

export const BreakdownTableHeadingText = styled(CosmosTitle).attrs(() => ({
    appearance: "dark",
    kind: "subtle",
    size: "small@small medium@medium",
    spacing: "none",
    weight: "bold",
    tag: "p"
}))`
    margin-bottom: 8px;
    --cosmos-title-color: #000F1E99;
`;

export const BreakdownTableContainer = styled.div`
    width: 100%;
    overflow: auto;
`;

export const BreakdownTable = styled.table`
    width: 100%;

    tbody {
        tr {
            &:not(:last-child) {
                border-bottom: 1px solid #EFEFEF;
            }
        }
    }
`;

export const HeaderContainer = styled.thead`
    border-bottom: 1px solid #EFEFEF;
`;

export const RowContainer = styled.tr`
    min-height: 60px;
`;

export const DataContainer = styled.td`
    align-content: center;
    padding-left: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    
    @media (min-width: 650px) {
        padding-left: 8px;
        padding-top: 8px;
        padding-bottom: 8px;
    }
`;

export const HeaderRow = styled.tr`
    height: 30px;

    @media (min-width: 650px) {
        height: 40px;
    }
`;

export const HeaderTitleContainer = styled.td`
    align-content: center;
    padding-left: 4px;

    @media (min-width: 650px) {
        padding-left: 8px;
    }
`;

export const HeaderTitleText = styled(CosmosText).attrs(() => ({
    appearance: "dark",
    kind: "normal",
    size: "x-small@small small@medium",
    spacing: "none",
    weight: "medium",
}))`
    text-align: ${props => props.leftAlign ? 'left' : 'center'}
`;

export const TrickCountDisplayContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TricksContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const TrickNumberContainer = styled(CosmosText).attrs(() => ({
    appearance: "dark",
    kind: "subtle",
    size: "xx-small",
    spacing: "none",
    weight: "medium",
}))`
    min-width: 100px;
    justify-content: center;
    text-align: center;
`;

export const AthleteRankText = styled(CosmosText).attrs(() => ({
    appearance: "dark",
    kind: "normal",
    size: "large@small x-large@medium",
    spacing: "none",
    weight: "bold",
}))`
    width: 50px;

    @media (min-width: 650px) {
        width: 60px;
    }
`;