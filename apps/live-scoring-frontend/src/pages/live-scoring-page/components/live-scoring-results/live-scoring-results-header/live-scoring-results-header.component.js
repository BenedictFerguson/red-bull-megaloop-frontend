import React from "react";
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
import ResultsHeaderToggleView from "./components/results-header-toggle-view/results-header-toggle-view.component";
import ResultsHeaderSelectHeat from "./components/results-header-select-heat/results-header-select-heat.component";
import LiveScoringTimerComponent from "./components/live-scoring-timer/live-scoring-timer.component";
import {getCurrentTimer} from "../../../helpers/get-current-timer.helper";
import {useLiveScoringState} from "../../../../../hooks/use-live-scoring-state.hook";
import LiveScoringClassToggle from './components/live-scoring-class-toggle/live-scoring-class-toggle.component';
import PropTypes from 'prop-types';

const LiveScoringResultsHeader = ({ isComponentSuccessful }) => {
    const { state } = useLiveScoringState();
    const timer = getCurrentTimer(state);

    return (
        <LiveScoringResultsHeaderContainer>
            <LiveScoringResultsTopHeaderContainer>
                <LiveScoringResultsHeaderTitle>Results</LiveScoringResultsHeaderTitle>
                <ResultsHeaderRightContainer>
                    <LiveScoringResultsHeaderTimerContainer>
                        <LiveScoringTimerComponent timer={timer} />
                    </LiveScoringResultsHeaderTimerContainer>
                </ResultsHeaderRightContainer>
            </LiveScoringResultsTopHeaderContainer>
            {
                isComponentSuccessful &&
                    <LiveScoringResultBottomHeaderContainer>
                        <LiveScoringResultDesktopSectionContainer>
                            <LiveScoringResultBottomHeaderRightContainer>
                                <LiveScoringClassToggle />
                                <ResultsHeaderToggleView/>
                            </LiveScoringResultBottomHeaderRightContainer>
                            <LiveScoringResultBottomHeaderLeftContainer>
                                <ResultsHeaderSelectHeat/>
                            </LiveScoringResultBottomHeaderLeftContainer>
                        </LiveScoringResultDesktopSectionContainer>
                        <LiveScoringResultMobileSectionContainer>
                            <LiveScoringClassToggle />
                            <ResultsHeaderToggleView/>
                            <ResultsHeaderSelectHeat/>
                        </LiveScoringResultMobileSectionContainer>
                    </LiveScoringResultBottomHeaderContainer>
            }
        </LiveScoringResultsHeaderContainer>

    )
};

LiveScoringResultsHeader.propTypes = {
    isComponentSuccessful: PropTypes.bool.isRequired,
}

export default LiveScoringResultsHeader;