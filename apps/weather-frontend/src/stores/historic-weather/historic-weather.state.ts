import { TimeLineWind } from '@shared/models/historic-results-response.model';

export interface HistoricData extends TimeLineWind {
    date: number;
}

export interface HistoricWeatherActions {
    setData: (data: TimeLineWind[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setHasError: (hasError: boolean) => void;
    setIsLoadingHasError: (isLoading: boolean, hasError: boolean) => void;
}

export interface HistoricWeatherState extends HistoricWeatherActions {
    data: HistoricData[];
    isLoading: boolean;
    hasError: boolean;
}