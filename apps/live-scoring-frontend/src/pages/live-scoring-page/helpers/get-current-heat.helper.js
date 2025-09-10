import { EVENT_CLASSES } from '../constants/event-classes.constants';

export const getCurrentHeat = (state) => {
    const { currentClass, currentRoundId, currentHeatId } = state;
    const event = currentClass === EVENT_CLASSES.Open ? state.openEvent : state.womenEvent;
    const roundHeats = event.heatMap[currentRoundId];
    const heat = roundHeats.find((heat) => heat.heatId === currentHeatId);
    return heat;
};