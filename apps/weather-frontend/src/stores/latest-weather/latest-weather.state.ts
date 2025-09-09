import { KsnWindLatestResults } from '@shared/models/latest-results-reponse.model';

export interface LatestWeatherActions extends KsnWindLatestResults {
    setResults: (results: KsnWindLatestResults) => void;
}

export interface LatestWeatherState extends LatestWeatherActions {

}