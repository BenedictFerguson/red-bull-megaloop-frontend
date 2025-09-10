import './live-scoring-results.styles.css';
import React from 'react';
import { EVENT_VIEWS } from '@constants/event-views.constant.ts';
import { useLiveScoringStore } from '@stores/live-scoring-store/live-scoring.store.tsx';

const LiveScoringResults = () => {
    const currentView = useLiveScoringStore((state) => state.currentView);

    const currentDisplay =
        currentView === EVENT_VIEWS.Overview ? (
            <LiveScoringResultsOverview></LiveScoringResultsOverview>
        ) : (
            <DetailedResults></DetailedResults>
        );

    return (
        <div className="live-scoring-result-container">{currentDisplay}</div>
    );
};

export default LiveScoringResults;
