import styled from 'styled-components';
import {CosmosAvatar, CosmosText} from "@cosmos/web-scoped/react";

export const AthleteProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px
`;

export const AthleteNameText = styled(CosmosText).attrs((props) => ({
    appearance: "dark",
    kind: "normal",
    size: "small",
    spacing: "none",
    weight: props.isBold ? "bold" : "regular"
}))`
`;

export const AthleteProfileAvatar = styled(CosmosAvatar).attrs((props)=> ({
    ...props,
    appearance: "light",
    size: "x-small",
    framed: false,
}))`
    border: 2px solid ${props => props.athleteColor};
    border-radius: var(--cosmos-radius-full, 9999px);
    outline: 1px solid #EFEFEF;

    &.flagged-out {
        filter: grayscale(100%);
    }
`;
