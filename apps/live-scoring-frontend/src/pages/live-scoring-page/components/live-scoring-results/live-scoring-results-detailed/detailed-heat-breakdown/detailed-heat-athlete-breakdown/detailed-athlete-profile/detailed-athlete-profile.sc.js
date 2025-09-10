import styled from 'styled-components';
import {CosmosAvatar, CosmosText} from "@cosmos/web-scoped/react";

export const DetailedAthleteProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    
    &.carousal{
        padding-bottom: var(--cosmos-spacing-normal, 16px);
    }
`;

export const DetailedAthleteProfileAvatar = styled(CosmosAvatar).attrs((props)=> ({
    ...props,
    size: "x-small@small small@medium",
    framed: false,
}))`
    flex-shrink: 0;
    border: 2px solid ${props => props.athleteColor};
    border-radius: var(--cosmos-radius-full, 9999px);
    outline: 1px solid #EFEFEF;

    @media (min-width: 650px) {
        border: 4px solid ${props => props.athleteColor};
    }
    
    &.flagged-out {
        filter: grayscale(100%);
    }
    

`;

export const AthleteNameText = styled(CosmosText).attrs(() => ({
    appearance: "dark",
    kind: "normal",
    size: 'small@small large@medium',
    spacing: "none",
    weight: "bold",
}))`
    width: 200px;

    @media (min-width: 650px) {
        width: 300px;
    }
`;

export const AthleteFlag = styled.div`
    flex-shrink: 0;
`