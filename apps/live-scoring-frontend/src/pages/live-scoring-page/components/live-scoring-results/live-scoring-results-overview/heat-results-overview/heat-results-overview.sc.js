import styled from 'styled-components';

export const HeatResultsOverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const HeatResultsAthleteOverviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border: 1px #EFEFEF solid;
    box-shadow: 0px 8px 12px 0px rgba(0, 15, 30, 0.04),
    0px 2px 4px 0px rgba(0, 15, 30, 0.02);
    cursor: pointer;
    background-color: #FFFFFF;
`;

export const HeatHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const HeatLiveIndicator = styled.div.attrs((props) => ({
    ...props
})) `
    justify-content: flex-end;
    height: ${props => props.height};
    width: ${props => props.width};
    border-radius: 50%;
    background-color: #F50B48;
    animation: blinker 1.5s linear infinite;

    @keyframes blinker {
        50% {
            opacity: 0.2;
        }
    }
`;