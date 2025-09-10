import React from 'react';
import { CosmosText } from '@cosmos/web-scoped/react';
import { LiveScoringClassToggleContainer, LiveScoringClassToggleButton } from './live-scoring-class-toggle.sc';
import { useLiveScoringState } from '../../../../../../../hooks/use-live-scoring-state.hook';
import { EVENT_CLASSES } from '../../../../../constants/event-classes.constants';

const LiveScoringClassToggle = () => {
    const { state, dispatch } = useLiveScoringState();

    const toggleClasses = ['filter-toggle'];
    state.currentClass === EVENT_CLASSES.Women ?
        toggleClasses.push(' filter-toggle--second-active') :
        toggleClasses.push(' filter-toggle--first-active');

    const setNewCurrentClass = (newClass) => {
        const type = 'UPDATE_CLASS';
        const payload = {
            newClass,
        };
        dispatch({
            type,
            payload
        });
    };

    return (
        <LiveScoringClassToggleContainer>
            <LiveScoringClassToggleButton>
                <div className={toggleClasses.join(' ')}>
                    <div className="filter-toggle__slider" />
                    <div className="filter-toggle__options">
                        <div className="filter-toggle__option">
                            <input type="radio" value="Random"
                                   className="filter-toggle__option-input" />
                            <CosmosText kind="subtle" size="small" spacing="none" status="default" tag="p" weight="bold"
                                        appearance="dark" className="filter-toggle__option-label"
                                        onClick={() => setNewCurrentClass(EVENT_CLASSES.Open)}>Open</CosmosText>
                        </div>
                        <div className="filter-toggle__option">
                            <input type="radio" value="Votes"
                                   className="filter-toggle__option-input" />
                            <CosmosText kind="subtle" size="small" spacing="none" status="default" tag="p" weight="bold"
                                        appearance="dark" className="filter-toggle__option-label"
                                        onClick={() => setNewCurrentClass(EVENT_CLASSES.Women)}>Women</CosmosText>
                        </div>
                    </div>
                </div>
            </LiveScoringClassToggleButton>
        </LiveScoringClassToggleContainer>
    );
};

export default LiveScoringClassToggle;