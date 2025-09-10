import React from 'react';
import {
    LiveScoringErrorContainer,
    LiveScoringErrorIcon,
    LiveScoringErrorTitle,
} from './live-scoring-error.sc';

const LiveScoringError = () => {
    return (
        <LiveScoringErrorContainer>
            <LiveScoringErrorIcon />
            <LiveScoringErrorTitle size="medium" spacing="long-form-top" tag="p" weight="bold" kind="normal">
                Something went wrong, please refresh the page.
            </LiveScoringErrorTitle>
        </LiveScoringErrorContainer>
    );
};

export default LiveScoringError;