import { produce } from 'immer';
import { create, type StateCreator } from 'zustand';
import { createJSONStorage, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { ComponentState } from '@enums/component-state.enum.ts';
import type {AppState} from "@stores/app/app.state.ts";
import { BaseTenantCredentials } from '@shared/models/tenant-credentials.model';

const storeMiddleware = (state: StateCreator<AppState, [], []>) =>
    devtools(
        immer(
            state, {
                name: 'stateOfPlayAppStore',
                storage: createJSONStorage(() => sessionStorage),
            }
        ),
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

        componentState: ComponentState.LOADING,
        setComponentState: (componentState: ComponentState) =>
            set(
                produce<AppState>((state) => {
                    state.componentState = componentState;
                    state.isLoading =
                        componentState === ComponentState.LOADING;
                    state.isEventReady =
                        componentState === ComponentState.SUCCESS ||
                        componentState === ComponentState.READY;
                    state.hasError =
                        componentState === ComponentState.ERROR;
                }),
            ),

        tenantCredentials: BaseTenantCredentials,
        setTenantCredentials: (newTenantCredentials: TenantCredentials) => 
            set(
                produce<AppState>((state) => {
                    state.tenantCredentials = newTenantCredentials;
                })
            ),

        resetAppState: () =>
            set({
                apiUrl: 'http://localhost:8080/api/v1',
                assetUrl: 'http://localhost:8080/public',
                assetId: null,
                componentState: ComponentState.LOADING,
            }),
    })),
);
