import React from 'react';
import {
    LiveScoringPreEventContainer,
    LiveScoringPreEventTitle,
} from './live-scoring-pre-event.sc';
import PropTypes from 'prop-types';

const LiveScoringPreEvent = ({ isEventReady }) => {
    const copy = isEventReady ?
        'Stay tuned, the event will start soon!' : 'We are waiting for some wind, keep an eye out on the window period status!';
    return (
        <LiveScoringPreEventContainer>
            <LiveScoringPreEventTitle size="medium">
                { copy }
            </LiveScoringPreEventTitle>
        </LiveScoringPreEventContainer>
    );
};

LiveScoringPreEvent.propTypes = {
    isEventReady: PropTypes.bool,
};

export default LiveScoringPreEvent;