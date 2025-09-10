import React from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash/lang';
import {
    LiveScoringHeaderAndTimerContainer,
    LiveScoringTimerContainer,
    LiveScoringTimerHeader,
    LiveScoringTimerHeaderText,
    LiveScoringTimerIcon,
    LiveScoringTimerRightSection,
    LiveScoringTimerSection,
    LiveScoringTimerStatusText,
    LiveScoringTimerTimeText,
} from './live-scoring-timer.sc';
import {useCountdown} from "../../../../../../../hooks/countdown-hook";
import { useLiveScoringState } from '../../../../../../../hooks/use-live-scoring-state.hook';
import { getCurrentHeat } from '../../../../../helpers/get-current-heat.helper';

const GetStatusCopy = (status, heatName = null) => {
    switch (status) {
        case 'to_break': {
            let statusCopy = 'To Flag Out';
            if (heatName) {
                statusCopy += ` of ${heatName}`;
            }
            return statusCopy;
        }
        case 'break': {
            let statusCopy = 'Flag Out Break';
            if (heatName) {
                statusCopy += ` of ${heatName}`;
            }
            return statusCopy;
        }
        case 'to_end': {
            let statusCopy = 'To End';
            if (heatName) {
                statusCopy += ` of ${heatName}`;
            } else {
                statusCopy += ' of Heat';
            }
            return statusCopy;
        }
        case 'to_next': {
            let statusCopy = 'Finalising';
            if (heatName) {
                statusCopy += ` of ${heatName}`;
            } else {
                statusCopy += ' of Heat';
            }
            return statusCopy;
        }
        case 'to_start': {
            let statusCopy = 'To Start';
            if (heatName) {
                statusCopy += ` of ${heatName}`;
            } else {
                statusCopy += ' of Heat';
            }
            return statusCopy;
        }
        case 'pause':
            return 'Paused';
        case 'postpone':
            return 'Postponed';
        case 'crash': {
            let statusCopy = 'Crash';
            if (heatName) {
                statusCopy += ` in ${heatName}`;
            } else {
                statusCopy += ' in Heat';
            }
            return statusCopy;
        }
        case 'abandon': {
            let statusCopy = 'Abandoned';
            if (heatName) {
                statusCopy = `${heatName} ${statusCopy}`;
            } else {
                statusCopy = `Heat ${statusCopy}`;
            }
            return statusCopy;
        }
        default:
            return '';
    }
};

const ShowCountDownTime = (state) => {
    switch (state) {
        case 'to_break':
            return true;
        case 'break':
            return true;
        case 'to_end':
            return true;
        case 'to_next':
            return true;
        case 'to_start':
            return true;
        case 'pause':
            return false;
        case 'postpone':
            return false;
        case 'crash':
            return false;
        case 'abandon':
            return false;
        default:
            return false;
    }
};

const LiveScoringTimerComponent = ({timer}) => {
    if (isNil(timer)) {
        return null;
    }

    let [countDownTimeMinutes, countDownTimeSeconds] = ['-', '-'];
    const showTimer = ShowCountDownTime(timer?.timerState);

    let statusCopy = GetStatusCopy(timer?.timerState);
    if (showTimer) {
        const {state} = useLiveScoringState();
        let currentHeat = getCurrentHeat(state);
        statusCopy = GetStatusCopy(timer?.timerState, currentHeat?.name);
    }

    const countDownTimerClassNames = ['live-event-timer-countdown-timer'];

    if (timer?.timerEndOfState && showTimer) {
        const [minutes, seconds] = useCountdown(timer.timerEndOfState * 1000);
        countDownTimeMinutes = minutes.toString();
        const tempSeconds = seconds.toString().replace('-', '');
        const isTimerExpired = minutes < 0 && seconds < 0;

        countDownTimeSeconds = tempSeconds.toString();

        if (countDownTimeSeconds.length === 1) {
            countDownTimeSeconds = '0' + countDownTimeSeconds;
        }

        if (countDownTimeMinutes.length === 1) {
            countDownTimeMinutes = '0' + countDownTimeMinutes;
        }

        if (isTimerExpired) {
            countDownTimeMinutes = '00';
            countDownTimeSeconds = '00';
            countDownTimerClassNames.push('timer-expired');
        }
    }

    const countDownTimerClasses = countDownTimerClassNames.join(' ');

    return (
        <LiveScoringTimerContainer>
            <LiveScoringTimerIcon></LiveScoringTimerIcon>
            <LiveScoringHeaderAndTimerContainer>
                <LiveScoringTimerHeader>
                    <LiveScoringTimerHeaderText
                        size="small"
                        spacing="none"
                        status="default"
                        tag="p"
                        weight="regular"
                        appearance="dark"
                    >
                        {statusCopy}
                    </LiveScoringTimerHeaderText>
                </LiveScoringTimerHeader>
                <LiveScoringTimerSection>
                    <LiveScoringTimerRightSection>
                        {!showTimer ? null : (
                            <LiveScoringTimerTimeText
                                size="small"
                                spacing="none"
                                status="default"
                                tag="p"
                                weight="bold"
                                appearance="dark"
                                className={countDownTimerClasses}
                            >
                                {countDownTimeMinutes + ':' + countDownTimeSeconds}
                            </LiveScoringTimerTimeText>
                        )}
                        {isNil(timer?.state) ? null : (
                            <LiveScoringTimerStatusText
                                kind="subtle"
                                size="medium"
                                spacing="none"
                                status="default"
                                tag="p"
                                weight="regular"
                                appearance="dark"
                            >
                                {statusCopy}
                            </LiveScoringTimerStatusText>
                        )}
                    </LiveScoringTimerRightSection>
                </LiveScoringTimerSection>
            </LiveScoringHeaderAndTimerContainer>

        </LiveScoringTimerContainer>
    );
};

LiveScoringTimerComponent.propTypes = {
    timer: PropTypes.object,
};

export default LiveScoringTimerComponent;
