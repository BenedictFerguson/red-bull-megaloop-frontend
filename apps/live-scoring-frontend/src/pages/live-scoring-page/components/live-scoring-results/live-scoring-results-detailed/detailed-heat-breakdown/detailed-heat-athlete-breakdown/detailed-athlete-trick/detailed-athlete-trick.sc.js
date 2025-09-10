import styled from 'styled-components';
import {CosmosIconStarFilled, CosmosText} from "@cosmos/web-scoped/react";

export const DetailedAthleteTrickContainer = styled.div`
    display: flex;
    min-width: 100px;
    justify-content: center;
    align-items: baseline;
`;

export const TopScoreIcon = styled(CosmosIconStarFilled)`
    color: ${(props) => props.topScore && '#D0D631'};
    padding-right: 4px;
`;

export const AthleteTrickScoreText = styled(CosmosText).attrs(() => ({
    appearance: "dark",
    kind: "normal",
    size: "small",
    spacing: "none",
    weight: "medium",
}))`
    padding-right: 4px;
    color: ${(props) => props.topScore && '#D0D631 !important'};
`;
