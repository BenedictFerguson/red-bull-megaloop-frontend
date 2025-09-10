import React, { useContext } from 'react';
import './live-scoring-results-overview.styles.css';
import RoundResultsOverview from './round-results-overview/round-results-overview.component';

// Table view
const LiveScoringResultsOverview = () => {
    // const state = useContext(LiveScoringEventResultContext);
    //
    // // sort to ensure rounds are displaying in the correct order
    // const rounds = Object.values(state.roundMap).sort(
    //     (a, b) => a.index - b.index,
    // );

    return (
        <div className="live-scoring-result-overview">
            Rounds
            {/*{rounds.map((round, index) => (*/}
            {/*    <RoundResultsOverview*/}
            {/*        round={round}*/}
            {/*        key={index}*/}
            {/*    ></RoundResultsOverview>*/}
            {/*))}*/}
        </div>
    );
};

export default LiveScoringResultsOverview;
