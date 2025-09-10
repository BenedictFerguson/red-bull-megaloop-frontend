import type { ComponentState } from '@enums/component-state.enum.ts';

export interface LiveScoringStateSelectors {}

export interface LiveScoringActions {
    setEvents: (newEvents: any) => void;
}

export interface LiveScoringState
    extends LiveScoringActions,
        LiveScoringStateSelectors {
    events: any;
}
