import styled from 'styled-components';

export const LiveScoringResultOverviewContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
    overflow-x: auto;
    padding-bottom: 24px;

    @media only screen and (min-width: 650px) {
        gap: 56px;
    }
`;