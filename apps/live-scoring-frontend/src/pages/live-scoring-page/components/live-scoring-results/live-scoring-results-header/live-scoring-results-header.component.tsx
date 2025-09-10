import React from 'react';
import './live-scoring-results-header.styles.css';
import LiveScoringResultsHeaderClassToggle from '@pages/live-scoring-page/components/live-scoring-results/live-scoring-results-header/components/live-scoring-results-header-class-toggle/live-scoring-results-header-class-toggle.component.tsx';
import LiveScoringResultsHeaderSelectHeat from '@pages/live-scoring-page/components/live-scoring-results/live-scoring-results-header/components/live-scoring-results-header-select-heat/live-scoring-results-header-select-heat.component.tsx';
import LiveScoringResultsHeaderToggleView from '@pages/live-scoring-page/components/live-scoring-results/live-scoring-results-header/components/live-scoring-results-header-toggle-view/live-scoring-results-header-toggle-view.component.tsx';

const LiveScoringResultsHeader = () => {
    return (
        <div className="live-scoring-results-header-container">
            <div className="live-scoring-result-bottom-header-container">
                <div className="live-scoring-result-desktop-section-container">
                    <div className="live-scoring-result-bottom-header-right-container">
                        <LiveScoringResultsHeaderClassToggle />
                        <LiveScoringResultsHeaderToggleView />
                    </div>
                    <div className="live-scoring-result-bottom-header-left-container">
                        <LiveScoringResultsHeaderSelectHeat />
                    </div>
                </div>
                <div className="live-scoring-result-mobile-section-container">
                    <LiveScoringResultsHeaderClassToggle />
                    <LiveScoringResultsHeaderToggleView />
                    <LiveScoringResultsHeaderSelectHeat />
                </div>
            </div>
        </div>
    );
};

export default LiveScoringResultsHeader;
