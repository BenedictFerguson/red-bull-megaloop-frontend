export interface LiveScoringStateSelectors {}

export interface LiveScoringActions {}

export interface LiveScoringState
    extends LiveScoringActions,
        LiveScoringStateSelectors {
    eventSeries: any | null;
    currentClass: string | null;
    currentView: string | null;
    currentRoundId: string | null;
    currentHeatId: string | null;
    openEvent: any | null;
    womenEvent: any | null;
    eventDataNamesInitialised: string[];
}
