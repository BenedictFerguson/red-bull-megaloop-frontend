import { produce } from 'immer';
import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { LiveScoringState } from '@stores/live-scoring-store/live-scoring.state.ts';

const storeMiddleware = (state: StateCreator<LiveScoringState, [], []>) =>
    devtools(immer(state));

export const useLiveScoringStore = create<LiveScoringState>()(
    storeMiddleware((set, get) => ({
        events: 'http://localhost:8080/api/v1',
        setEvents: (newEvents: string) =>
            set(
                produce<LiveScoringState>((state) => {
                    state.events = newEvents;
                }),
            ),
    })),
);
