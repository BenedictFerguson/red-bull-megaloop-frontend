import { produce } from 'immer';
import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { AppState } from '@stores/app/app.state';
import { BaseTenantCredentials, TenantCredentials } from '@shared/models/tenant-credentials.model';
import { CosmosTheme } from '@enums/cosmos-theme.enum';

const storeMiddleware = (state: StateCreator<AppState, [], []>) =>
    devtools(
        immer(state), {
            name: 'weather-app-state',
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

        tenantCredentials: BaseTenantCredentials,
        setTenantCredentials: (newTenantCredentials: TenantCredentials) => 
            set(
                produce<AppState>((state) => {
                    state.tenantCredentials = newTenantCredentials;
                })
            ),

        theme: CosmosTheme.dark,

        setTheme: (newTheme: CosmosTheme) => set(
            produce<AppState>((state) => {
                state.theme = newTheme;
            })
        ),

        resetAppState: () =>
            set({
                apiUrl: 'http://localhost:8080/api/v1',
                assetUrl: 'http://localhost:8080/public',
                assetId: null,
            }),
    })),
);
