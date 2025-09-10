import styled from 'styled-components';
import { CosmosIconErrorFilled, CosmosTitle } from '@cosmos/web-scoped/react';

export const LiveScoringErrorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    height: 50vh;
`;

export const LiveScoringErrorIcon = styled(CosmosIconErrorFilled)`
    width: 5rem;
    height: 5rem;
    color: white;
`

export const LiveScoringErrorTitle = styled(CosmosTitle)``;
