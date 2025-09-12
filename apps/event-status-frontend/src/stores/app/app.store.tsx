import { produce } from 'immer';
import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { AppState } from "@stores/app/app.state";

const storeMiddleware = (state: StateCreator<AppState, [], []>) =>
    devtools(
        immer(
            state
        ), {
            name: 'megaloop-event-status-store',
        }
    );

export const useAppStore = create<AppState>()(
    storeMiddleware((set, get) => ({
        apiUrl: 'http://localhost:8080/api/v1',
        setApiUrl: (newApiUrl: string) =>
            set(
                produce<AppState>((state) => {
                    state.apiUrl = newApiUrl;
                }),
            ),

        assetUrl: 'http://localhost:8080/public',
        setAssetUrl: (newAssetUrl: string) =>
            set(
                produce<AppState>((state) => {
                    state.assetUrl = newAssetUrl;
                }),
            ),

        assetId: null,
        setAssetId: (newAssetId: string) =>
            set(
                produce<AppState>((state) => {
                    state.assetId = newAssetId;
                }),
            ),

        windowPeriodStatus: null,
        setWindowPeriodStatus: (newWindowPeriodStatus: string) => set(
            produce<AppState>((state) => {
                state.windowPeriodStatus = newWindowPeriodStatus;
            }),
        ),

        startTime: '2:30 pm',
        setStartTime: (newStartTime: string) => set(
            produce<AppState>((state) => {
                state.startTime = newStartTime;
            }),
        ),

        resetAppState: () =>
            set({
                apiUrl: 'http://localhost:8080/api/v1',
                assetUrl: 'http://localhost:8080/public',
                assetId: null,
            }),
    })),
);
