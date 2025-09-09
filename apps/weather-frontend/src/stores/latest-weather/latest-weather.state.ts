import { KsnWindLatestResults } from '@shared/models/latest-results-reponse.model';

export interface LatestWeatherActions extends KsnWindLatestResults {
    setResults: (results: KsnWindLatestResults) => void;
    setIsLoading: (isLoading: boolean) => void;
    setHasError: (hasError: boolean) => void;
    setIsLoadingHasError: (isLoading: boolean, hasError: boolean) => void;
}

export interface LatestWeatherState extends LatestWeatherActions {
    isLoading: boolean;
    hasError: boolean;
}