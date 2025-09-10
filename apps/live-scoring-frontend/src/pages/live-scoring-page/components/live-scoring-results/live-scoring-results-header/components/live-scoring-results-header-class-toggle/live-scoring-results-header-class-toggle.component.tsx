import React from 'react';
import { CosmosText } from '@cosmos/web-scoped/react';
import './live-scoring-results-header-class-toggle.styles.css';
import { useLiveScoringStore } from '@stores/live-scoring-store/live-scoring.store.tsx';
import { EVENT_CLASSES } from '@enums/event-classes.enum.ts';

const LiveScoringResultsHeaderClassToggle = () => {
    const currentClass = useLiveScoringStore((state) => state.currentClass);

    const toggleClasses = ['filter-toggle'];
    currentClass === EVENT_CLASSES.Women
        ? toggleClasses.push(' filter-toggle--second-active')
        : toggleClasses.push(' filter-toggle--first-active');

    const setNewCurrentClass = (newClass: EVENT_CLASSES) => {
        // const type = 'UPDATE_CLASS';
        // const payload = {
        //     newClass,
        // };
        // dispatch({
        //     type,
        //     payload
        // });
    };

    return (
        <div className="live-scoring-results-header-class-toggle-container">
            <div className="live-scoring-results-header-class-toggle-button">
                <div className={toggleClasses.join(' ')}>
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
                                    setNewCurrentClass(EVENT_CLASSES.Open)
                                }
                            >
                                Open
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
                                    setNewCurrentClass(EVENT_CLASSES.Women)
                                }
                            >
                                Women
                            </CosmosText>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveScoringResultsHeaderClassToggle;
