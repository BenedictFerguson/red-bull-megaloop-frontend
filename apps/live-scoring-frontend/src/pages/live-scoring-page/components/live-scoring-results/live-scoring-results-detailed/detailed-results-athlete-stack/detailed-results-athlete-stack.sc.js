import styled from 'styled-components';

export const DetailedResultsAthleteStackContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-bottom: var(--cosmos-spacing-loose, 24px);

    @media (min-width: 650px) {
        display: none;
    }
`;