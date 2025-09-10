import type { ComponentState } from '@enums/component-state.enum.ts';
import type { SocketConnectionDetails } from '../../models/socket-connection-details.model.ts';

export interface AppStateSelectors {}

export interface AppActions {
    setApiUrl(newApiUrl: string): void;

    setAssetUrl(newAssetUrl: string): void;

    setAssetId(newAssetId: string): void;

    setSocketConnectionDetails(
        newSocketConnectionDetails: SocketConnectionDetails,
    ): void;

    setComponentState(componentState: ComponentState): void;

    resetAppState(): void;
}

export interface AppState extends AppActions, AppStateSelectors {
    apiUrl: string | null;
    assetUrl: string | null;
    assetId: string | null;
    socketConnectionDetails: SocketConnectionDetails | null;
    componentState: ComponentState;
}
