import {
    EVENT_CLASSES,
    EVENT_CLASSES_TO_EVENT_DATA_NAME
} from '../pages/live-scoring-page/constants/event-classes.constants';
import {isEqual} from 'lodash/lang';
import {isNil, uniq} from "lodash";

const initialiseEventState = (state, eventClass, event) => {
    const initialisedEvents = state.eventDataNamesInitialised || [];
    const eventDataName = EVENT_CLASSES_TO_EVENT_DATA_NAME[eventClass];

    // When initialising the events, we need to set the current round
    // and current heat to the first round and first heat of the first round
    if (eventClass === state.currentClass) {
        const orderedRounds = Object
            .values(event.roundMap)
            .flat();

        const currentRoundId = orderedRounds[0].roundId;
        const orderedHeats = event.heatMap[currentRoundId];
        const currentHeatId = orderedHeats[0].heatId;

        return {
            ...state,
            currentRoundId,
            currentHeatId,
            eventDataNamesInitialised: uniq([...initialisedEvents, eventDataName]),
            [eventDataName]: event,
        };
    }

    return {
        ...state,
        eventDataNamesInitialised: uniq([...initialisedEvents, eventDataName]),
        [EVENT_CLASSES_TO_EVENT_DATA_NAME[eventClass]]: event,
    };
}

export const liveScoringStateReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CLASS': {
            if (state.currentClass === action.payload.newClass) {
                return state
            }
            const stateEvent = action.payload.newClass === EVENT_CLASSES.Open ?
                state.openEvent : state.womenEvent;
            const orderedRounds = Object
                .values(stateEvent.roundMap);

            // Find in progress round (round with heat in progress)

            // If no in progress round, find last round that was completed

            const currentRoundId = orderedRounds[0].roundId;
            const orderedHeats = stateEvent.heatMap[currentRoundId];
            const currentHeatId = orderedHeats[0].heatId;

            return {
                ...state,
                currentClass: action.payload.newClass,
                currentRoundId,
                currentHeatId,
            };
        }
        case 'UPDATE_VIEW': {
            if (state.currentView === action.payload.newView) {
                return state;
            }

            return {
                ...state,
                currentView: action.payload.newView,
            };
        }
        case 'INIT_EVENTS': {
            // When initialising the events, we need to set the current round
            // and current heat to the first round and first heat of the first round
            const currentClass = state.currentClass;
            const stateEvent = currentClass === EVENT_CLASSES.Open ?
                action.payload.openEvent : action.payload.womenEvent;
            const orderedRounds = Object
                .values(stateEvent.roundMap)
                .flat();

            const currentRoundId = orderedRounds[0].roundId;
            const orderedHeats = stateEvent.heatMap[currentRoundId];
            const currentHeatId = orderedHeats[0].heatId;

            const openEvent = action.payload.openEvent;
            const womenEvent = action.payload.womenEvent;

            const eventDataNamesInitialised = []
            if (!isNil(openEvent)) {
                const eventDataName = EVENT_CLASSES_TO_EVENT_DATA_NAME[EVENT_CLASSES.Open];
                eventDataNamesInitialised.push(eventDataName)
            }

            if (!isNil(womenEvent)) {
                const eventDataName = EVENT_CLASSES_TO_EVENT_DATA_NAME[EVENT_CLASSES.Women];
                eventDataNamesInitialised.push(eventDataName)
            }

            return {
                ...state,
                eventSeries: action.payload.eventSeries,
                currentRoundId,
                currentHeatId,
                openEvent,
                womenEvent,
                eventDataNamesInitialised
            };
        }
        case 'UPDATE_EVENT': {
            // Get updated event from payload
            const updatedEvent = action.payload.updatedEvent;
            const updatedEventClass = action.payload.eventClass;

            // Find the event in the state
            const stateEvent = updatedEventClass === EVENT_CLASSES.Open ?
                state.openEvent : state.womenEvent;

            if (isNil(stateEvent)) {
                return initialiseEventState(state, updatedEventClass, updatedEvent)
            }

            // Iterate through the events and compare them (isEqual)
            const keysToCompare = Object.keys(updatedEvent);
            const updatedEventStateDiff = {};
            for (let key of keysToCompare) {
                if (!isEqual(stateEvent[key], updatedEvent[key])) {
                    updatedEventStateDiff[key] = updatedEvent[key];
                }
            }

            const updatedState = {
                ...state,
            };

            if (!isEqual(action.payload.eventSeries, updatedState.eventSeries)) {
                updatedState.eventSeries = action.payload.eventSeries;
            }

            if (updatedEventClass === EVENT_CLASSES.Open) {
                updatedState.openEvent = {
                    ...state.openEvent,
                    ...updatedEventStateDiff,
                };
            } else if (updatedEventClass === EVENT_CLASSES.Women) {
                updatedState.womenEvent = {
                    ...state.womenEvent,
                    ...updatedEventStateDiff,
                };
            }

            return updatedState;
        }
        case 'UPDATE_CURRENT_ROUND': {
            // When changing rounds, we need to update the currentHeatId to
            // the first heat of the new round
            const currentClass = state.currentClass;
            const stateEvent = currentClass === EVENT_CLASSES.Open ?
                state.openEvent : state.womenEvent;
            const eventRoundHeats = stateEvent.heatMap[action.payload.roundId];
            const firstHeatOfRound = eventRoundHeats[0];

            return {
                ...state,
                currentRoundId: action.payload.roundId,
                currentHeatId: firstHeatOfRound.heatId,
            };
        }
        case 'UPDATE_CURRENT_HEAT': {
            return {
                ...state,
                currentHeatId: action.payload.heatId,
            };
        }
        default:
            return state;
    }
};