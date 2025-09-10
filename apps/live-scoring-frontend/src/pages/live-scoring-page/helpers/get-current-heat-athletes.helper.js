import { EVENT_CLASSES } from '../constants/event-classes.constants';

export const getCurrentHeatAthletes = (state) => {
    const { currentClass, currentHeatId } = state;
    const event = currentClass === EVENT_CLASSES.Open ? state.openEvent : state.womenEvent;
    const eventHeatAthletes = event.heatAthletesMap[currentHeatId];
    return eventHeatAthletes;
};