import React from 'react';
import {
    LiveScoringEventContainer,
} from './live-scoring-event.sc';
import LiveScoringResults from "../live-scoring-results/live-scoring-results.component";
import {EVENT_CLASSES, EVENT_CLASSES_TO_EVENT_DATA_NAME} from "../../constants/event-classes.constants";
import {LiveScoringResultStateProvider} from "../../../../providers/live-scoring-result-state.provider";
import {useLiveScoringState} from "../../../../hooks/use-live-scoring-state.hook";

const LiveScoringEvent = () => {
    const {state} = useLiveScoringState();
    const currentClass = state.currentClass || EVENT_CLASSES.Open;
    let eventKeyToDisplay = EVENT_CLASSES_TO_EVENT_DATA_NAME[currentClass];

    return (
        <LiveScoringEventContainer>
            <LiveScoringResultStateProvider eventKey={eventKeyToDisplay}>
                <LiveScoringResults/>
            </LiveScoringResultStateProvider>
        </LiveScoringEventContainer>
    );
};

export default LiveScoringEvent;