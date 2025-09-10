import React from 'react';
import { CosmosText } from '@cosmos/web-scoped/react';
import { LiveScoringClassToggleContainer, LiveScoringClassToggleButton } from './results-header-toggle-view.sc';
import {EVENT_VIEWS} from "../../../../../constants/event-views.constant";
import {useLiveScoringState} from "../../../../../../../hooks/use-live-scoring-state.hook";

const ResultsHeaderToggleView = () => {
    const { state, dispatch } = useLiveScoringState();

    if (state.eventDataNamesInitialised.length === 0){
        return null
    }

    const toggleviews = ['filter-toggle'];
    state.currentView === EVENT_VIEWS.Detailed ?
        toggleviews.push(' filter-toggle--second-active') :
        toggleviews.push(' filter-toggle--first-active');

    const setNewCurrentView = (newView) => {
        const type = 'UPDATE_VIEW';
        const payload = {
            newView,
        };
        dispatch({
            type,
            payload
        });
    };

    return (
        <LiveScoringClassToggleContainer >
            <LiveScoringClassToggleButton>
                <div className={toggleviews.join(' ')}>
                    <div className="filter-toggle__slider" />
                    <div className="filter-toggle__options">
                        <div className="filter-toggle__option">
                            <input type="radio" value="Random"
                                   className="filter-toggle__option-input" />
                            <CosmosText kind="subtle" size="small" spacing="none" status="default" tag="p" weight="bold"
                                        appearance="dark" className="filter-toggle__option-label"
                                        onClick={() => setNewCurrentView(EVENT_VIEWS.Overview)}>Overview</CosmosText>
                        </div>
                        <div className="filter-toggle__option">
                            <input type="radio" value="Votes"
                                   className="filter-toggle__option-input" />
                            <CosmosText kind="subtle" size="small" spacing="none" status="default" tag="p" weight="bold"
                                        appearance="dark" className="filter-toggle__option-label"
                                        onClick={() => setNewCurrentView(EVENT_VIEWS.Detailed)}>Detailed</CosmosText>
                        </div>
                    </div>
                </div>
            </LiveScoringClassToggleButton>
        </LiveScoringClassToggleContainer>
    );
};

export default ResultsHeaderToggleView;