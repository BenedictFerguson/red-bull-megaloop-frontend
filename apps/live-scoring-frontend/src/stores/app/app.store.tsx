import { produce } from 'immer';
import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ComponentState } from '@enums/component-state.enum.ts';
import type { AppState } from '@stores/app/app.state.ts';
import type { SocketConnectionDetails } from '../../models/socket-connection-details.model.ts';

const storeMiddleware = (state: StateCreator<AppState, [], []>) =>
    devtools(immer(state));

export const useAppStore = create<AppState>()(
    storeMiddleware((set, get) => ({
        apiUrl: null,
        setApiUrl: (newApiUrl: string) =>
            set(
                produce<AppState>((state) => {
                    state.apiUrl = newApiUrl;
                }),
            ),

        assetUrl: null,
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

        socketConnectionDetails: null,
        setSocketConnectionDetails: (
            newSocketConnectionDetails: SocketConnectionDetails,
        ) =>
            set(
                produce<AppState>((state) => {
                    state.socketConnectionDetails = newSocketConnectionDetails;
                }),
            ),

        componentState: ComponentState.LOADING,
        setComponentState: (newComponentState: ComponentState) =>
            set(
                produce<AppState>((state) => {
                    state.componentState = newComponentState;
                }),
            ),

        resetAppState: () =>
            set({
                apiUrl: null,
                assetUrl: null,
                assetId: null,
                socketConnectionDetails: null,
                componentState: ComponentState.LOADING,
            }),
    })),
);
