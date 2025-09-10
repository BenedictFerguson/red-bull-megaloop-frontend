import React, {Fragment} from 'react';
import {LiveScoringEventResultContext} from '../context/live-scoring-state.context';
import PropTypes from "prop-types";
import {useLiveScoringState} from "../hooks/use-live-scoring-state.hook";
import {isNil} from "lodash";

export const LiveScoringResultStateProvider = ({ eventKey, children }) => {
    const {state} = useLiveScoringState();
    const eventOnDisplay = state[eventKey];

    return (
        <LiveScoringEventResultContext.Provider value={{ ...eventOnDisplay }}>
            { !isNil(eventOnDisplay) && (<Fragment>{children}</Fragment>) }
        </LiveScoringEventResultContext.Provider>
    );
};

LiveScoringResultStateProvider.propTypes = {
    children: PropTypes.element,
    eventKey: PropTypes.string.isRequired
}