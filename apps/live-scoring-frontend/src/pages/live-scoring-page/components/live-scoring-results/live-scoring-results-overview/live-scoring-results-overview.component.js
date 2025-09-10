import React, {useContext} from 'react';
import {LiveScoringResultOverviewContainer} from "./live-scoring-results-overview.sc";
import RoundResultsOverview from "./round-results-overview/round-results-overview.component";
import {LiveScoringEventResultContext} from "../../../../../context/live-scoring-state.context";

// Table view
const LiveScoringResultsOverview = () => {
    const state = useContext(LiveScoringEventResultContext)

    // sort to ensure rounds are displaying in the correct order
    const rounds = Object.values(state.roundMap).sort((a, b) => a.index - b.index);

    return (
        <LiveScoringResultOverviewContainer>
            { rounds.map((round, index) =>
                (<RoundResultsOverview round={round} key={index}></RoundResultsOverview>))}
        </LiveScoringResultOverviewContainer>
    );
};

export default LiveScoringResultsOverview;