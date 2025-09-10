import React from 'react';
import {
    LiveScoringResultBottomHeaderContainer,
    LiveScoringResultBottomHeaderLeftContainer,
    LiveScoringResultBottomHeaderRightContainer,
    LiveScoringResultDesktopSectionContainer,
    LiveScoringResultMobileSectionContainer,
    LiveScoringResultsHeaderContainer,
    LiveScoringResultsHeaderTimerContainer,
    LiveScoringResultsHeaderTitle,
    LiveScoringResultsTopHeaderContainer,
    ResultsHeaderRightContainer,
} from './live-scoring-results-header.sc';
import ResultsHeaderToggleView from './components/results-header-toggle-view/results-header-toggle-view.component';
import ResultsHeaderSelectHeat from './components/results-header-select-heat/results-header-select-heat.component';
import LiveScoringClassToggle from './components/live-scoring-class-toggle/live-scoring-class-toggle.component';

const LiveScoringResultsHeader = () => {
    return (
        <LiveScoringResultsHeaderContainer>
            <LiveScoringResultBottomHeaderContainer>
                <LiveScoringResultDesktopSectionContainer>
                    <LiveScoringResultBottomHeaderRightContainer>
                        <LiveScoringClassToggle />
                        <ResultsHeaderToggleView />
                    </LiveScoringResultBottomHeaderRightContainer>
                    <LiveScoringResultBottomHeaderLeftContainer>
                        <ResultsHeaderSelectHeat />
                    </LiveScoringResultBottomHeaderLeftContainer>
                </LiveScoringResultDesktopSectionContainer>
                <LiveScoringResultMobileSectionContainer>
                    <LiveScoringClassToggle />
                    <ResultsHeaderToggleView />
                    <ResultsHeaderSelectHeat />
                </LiveScoringResultMobileSectionContainer>
            </LiveScoringResultBottomHeaderContainer>
        </LiveScoringResultsHeaderContainer>
    );
};

export default LiveScoringResultsHeader;
