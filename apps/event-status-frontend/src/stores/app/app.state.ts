
export interface AppStateSelectors {}

export interface AppActions {
    setApiUrl: (newApiUrl: string) => void;
    setAssetUrl: (newAssetUrl: string) => void;

    setAssetId(newAssetId: string): void;
    setWindowPeriodStatus(newWindowPeriodStatus: string): void;
    setStartTime(newStartTime: string): void;

    resetAppState(): void;
}

export interface AppState extends AppActions, AppStateSelectors {
    apiUrl: string;
    assetUrl: string;
    assetId: string | null;
    windowPeriodStatus: string;
    startTime: string;
}
