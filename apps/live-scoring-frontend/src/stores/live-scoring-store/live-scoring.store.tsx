import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { LiveScoringState } from '@stores/live-scoring-store/live-scoring.state.ts';
import { EVENT_CLASSES } from '@enums/event-classes.enum.ts';
import { EVENT_VIEWS } from '@enums/event-views.enum.ts';

const storeMiddleware = (state: StateCreator<LiveScoringState, [], []>) =>
    devtools(immer(state));

export const useLiveScoringStore = create<LiveScoringState>()(
    storeMiddleware((set, get) => ({
        eventSeries: null,
        openEvent: null,
        womenEvent: null,
        eventDataNamesInitialised: [],
        currentClass: EVENT_CLASSES.Open,
        currentView: EVENT_VIEWS.Overview,
        currentHeatId: null,
        currentRoundId: null,
    })),
);
