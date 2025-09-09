export interface KsnwindLatestResultsResponse {
    integrationId: string;
    nextUpdateDate: string;
    results: KsnWindLatestResults;
    integrator: string;
    last_updated: string;
}

export interface KsnWindLatestResults {
    dateTime: string;
    gustSpeed: MinMaxAvgCurrentDto;
    windChill: string;
    windSpeed: MinMaxAvgCurrentDto;
    temperature: Temperature;
    windDirection: MinMaxAvgCurrentDto;
}

export interface MinMaxAvgCurrentDto {
    avg: number;
    max: number;
    min: number;
    current: number;
}

export interface Temperature {
    actual: string;
}
