import { TimeLineWind } from '@shared/models/historic-results-response.model';

export interface HistoricWeatherActions {
    setData: (data: TimeLineWind[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    setHasError: (hasError: boolean) => void;
    setIsLoadingHasError: (isLoading: boolean, hasError: boolean) => void;
}

export interface HistoricWeatherState extends HistoricWeatherActions {
    data: TimeLineWind[];
    isLoading: boolean;
    hasError: boolean;
}