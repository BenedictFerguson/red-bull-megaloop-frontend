import React, { useReducer } from 'react';
import { liveScoringStateReducer } from '../state/live-scoring-state.reducer';
import { InitialLiveScoringStateState } from '../state/initial-live-scoring-state.state';
import { LiveScoringStateContext } from '../context/live-scoring-state.context';
import PropTypes from "prop-types";

export const LiveScoringStateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(liveScoringStateReducer, InitialLiveScoringStateState);

    return (
        <LiveScoringStateContext.Provider value={{ state, dispatch }}>
            {children}
        </LiveScoringStateContext.Provider>
    );
};

LiveScoringStateProvider.propTypes = {
    children: PropTypes.element
}