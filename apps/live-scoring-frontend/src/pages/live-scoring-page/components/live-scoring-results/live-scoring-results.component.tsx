import './live-scoring-results.styles.css';
import React from 'react';
import { useLiveScoringStore } from '@stores/live-scoring-store/live-scoring.store.tsx';
import LiveScoringResultsHeader from '@pages/live-scoring-page/components/live-scoring-results/live-scoring-results-header/live-scoring-results-header.component.tsx';
import { EVENT_VIEWS } from '@enums/event-views.enum.ts';
import LiveScoringResultsOverview from '@pages/live-scoring-page/components/live-scoring-results/live-scoring-results-overview/live-scoring-results-overview.component.tsx';

const LiveScoringResults = () => {
    const currentView = useLiveScoringStore((state) => state.currentView);

    const currentDisplay =
        currentView === EVENT_VIEWS.Overview ? (
            <LiveScoringResultsOverview />
        ) : null;

    return (
        <div className="live-scoring-result-container">
            <LiveScoringResultsHeader />
            {currentDisplay}
        </div>
    );
};

export default LiveScoringResults;
