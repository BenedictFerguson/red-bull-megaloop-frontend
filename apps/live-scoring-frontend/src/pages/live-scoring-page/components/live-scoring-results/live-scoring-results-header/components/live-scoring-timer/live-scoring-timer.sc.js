import styled from 'styled-components';
import {CosmosIconClock, CosmosText} from '@cosmos/web-scoped/react';

export const LiveScoringTimerContainer = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    height: 65px;
    width: 250px;
    background-color: white;
    border-radius: 8px;
    border: 1px #EFEFEF solid;
    box-shadow: 0.0px 8.0px 12.0px 0px rgba(0, 15, 30, 0.04), 0.0px 2.0px 4.0px 0px rgba(0, 15, 30, 0.02);
    margin-top: 12px;

    @media only screen and (min-width: 1000px) {
        margin-top: 0;
    }
`;

export const LiveScoringHeaderAndTimerContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const LiveScoringTimerHeader = styled.div`
    display: flex;
    justify-content: center;
`;

export const LiveScoringTimerHeaderText = styled(CosmosText)``;

export const LiveScoringTimerSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LiveScoringTimerLeftSection = styled.div`
    .live-event-timer-indicator {
        display: flex;
        justify-content: flex-start;

    }
`;

export const LiveScoringTimerRightSection = styled.div`
    display: flex;
    justify-content: flex-end;

    .live-event-timer-countdown-timer {
        margin-right: 8px;

        &.timer-expired {
            animation: blinker 1.5s linear infinite;
        }

        @keyframes blinker {
            50% {
                opacity: 0.2;
            }
        }
    }
`;

export const LiveScoringTimerTimeText = styled(CosmosText)``;
export const LiveScoringTimerStatusText = styled(CosmosText)``;

export const LiveScoringTimerIndicator = styled.div`
    margin-right: 8px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
`;

export const LiveScoringTimerIcon = styled(CosmosIconClock)`
    width: 40px;
    height: 40px;
`
