import React from 'react';
import { CosmosText } from '@cosmos/web-scoped/react';
import './live-scoring-results-header-toggle-view.styles.css';
import { EVENT_VIEWS } from '../../../../../constants/event-views.constant';
import { useLiveScoringState } from '../../../../../../../hooks/use-live-scoring-state.hook';
import { useLiveScoringStore } from '@stores/live-scoring-store/live-scoring.store.tsx';

const LiveScoringResultsHeaderToggleView = () => {
    const currentView = useLiveScoringStore((state) => state.currentView);

    const toggleviews = ['filter-toggle'];
    currentView === EVENT_VIEWS.Detailed
        ? toggleviews.push(' filter-toggle--second-active')
        : toggleviews.push(' filter-toggle--first-active');

    const setNewCurrentView = (newView: any) => {
        // const type = 'UPDATE_VIEW';
        // const payload = {
        //     newView,
        // };
        // dispatch({
        //     type,
        //     payload,
        // });
    };

    return (
        <div className="live-scoring-results-header-toggle-view-container">
            <div className="live-scoring-results-header-toggle-view-button">
                <div className={toggleviews.join(' ')}>
                    <div className="filter-toggle__slider" />
                    <div className="filter-toggle__options">
                        <div className="filter-toggle__option">
                            <input
                                type="radio"
                                value="Random"
                                className="filter-toggle__option-input"
                            />
                            <CosmosText
                                kind="subtle"
                                size="small"
                                spacing="none"
                                tag="p"
                                weight="bold"
                                appearance="dark"
                                className="filter-toggle__option-label"
                                onClick={() =>
                                    setNewCurrentView(EVENT_VIEWS.Overview)
                                }
                            >
                                Overview
                            </CosmosText>
                        </div>
                        <div className="filter-toggle__option">
                            <input
                                type="radio"
                                value="Votes"
                                className="filter-toggle__option-input"
                            />
                            <CosmosText
                                kind="subtle"
                                size="small"
                                spacing="none"
                                tag="p"
                                weight="bold"
                                appearance="dark"
                                className="filter-toggle__option-label"
                                onClick={() =>
                                    setNewCurrentView(EVENT_VIEWS.Detailed)
                                }
                            >
                                Detailed
                            </CosmosText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveScoringResultsHeaderToggleView;
