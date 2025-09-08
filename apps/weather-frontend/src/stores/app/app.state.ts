import type { ComponentState } from '@enums/component-state.enum.ts';
import { TenantCredentials } from '@shared/models/tenant-credentials.model';

export interface AppStateSelectors {}

export interface AppActions {
    setApiUrl: (newApiUrl: string) => void;
    setAssetUrl: (newAssetUrl: string) => void;

    setAssetId(newAssetId: string): void;

    setComponentState(componentState: ComponentState): void;

    setTenantCredentials(newTenantCredentials: TenantCredentials): void;

    resetAppState(): void;
}

export interface AppState extends AppActions, AppStateSelectors {
    apiUrl: string;
    assetUrl: string;
    assetId: string | null;
    componentState: ComponentState;
    tenantCredentials: TenantCredentials;
}
