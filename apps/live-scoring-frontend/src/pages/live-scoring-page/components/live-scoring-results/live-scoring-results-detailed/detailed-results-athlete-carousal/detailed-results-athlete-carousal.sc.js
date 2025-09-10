import styled from 'styled-components';

export const DetailedResultsAthleteCarousalContainer = styled.div`
    width: 100%;
    display: none;
    flex-direction: row;
    padding-bottom: var(--cosmos-spacing-loose, 24px);
    
    @media (min-width: 650px) {
        display: flex;
    }
`;