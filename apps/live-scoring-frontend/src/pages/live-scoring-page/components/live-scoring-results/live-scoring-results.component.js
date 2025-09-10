import React from 'react';
import {LiveScoringResultContainer} from "./live-scoring-results.sc";
import LiveScoringResultsOverview from "./live-scoring-results-overview/live-scoring-results-overview.component";
import {useLiveScoringState} from "../../../../hooks/use-live-scoring-state.hook";
import {EVENT_VIEWS} from "../../constants/event-views.constant";
import DetailedResults from './live-scoring-results-detailed/detailed-results.component';

const LiveScoringResults = () => {
    const { state } = useLiveScoringState();

    const currentView = state.currentView;

    const currentDisplay = currentView === EVENT_VIEWS.Overview ?
        (<LiveScoringResultsOverview></LiveScoringResultsOverview>) : (<DetailedResults></DetailedResults>)

    return (
        <LiveScoringResultContainer>
            {currentDisplay}
        </LiveScoringResultContainer>
    );
};

export default LiveScoringResults;