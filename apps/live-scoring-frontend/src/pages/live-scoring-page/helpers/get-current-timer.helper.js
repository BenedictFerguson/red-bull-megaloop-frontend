import { isNil } from 'lodash';

const TIMER_METADATA_KEYS = [
    'timeEndOfHeat',
    'timeNow',
    'timerEndOfState',
    'timerState',
    'timerStateColor',
];

export const getCurrentTimer = (state) => {
    const { eventSeries } = state;

    if (isNil(eventSeries) ||
        isNil(eventSeries.metadata) ||
        isNil(eventSeries.metadata.data)) {
        return null;
    }

    const eventMetadata = eventSeries.metadata.data;
    const timer = TIMER_METADATA_KEYS.reduce((timer, timerKey) => {
        timer[timerKey] = eventMetadata[timerKey] ?? null;
        return timer;
    }, {});

    return timer;
};