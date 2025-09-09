export interface LatestWeatherActions extends Results {
    setResults: (results: Results) => void;
    // getCurrentGustSpeed: () => number;
}

export interface LatestWeatherState extends LatestWeatherActions {

}

// --------------------------------------------------------

export interface KsnwindLatestResultsResponse {
    integrationId: string;
    nextUpdateDate: string;
    results: Results;
    integrator: string;
    last_updated: string;
}

export interface Results {
    dateTime: string;
    gustSpeed: GustSpeed;
    windChill: string;
    windSpeed: WindSpeed;
    temperature: Temperature;
    windDirection: WindDirection;
}

export interface GustSpeed {
    avg: number;
    max: number;
    min: number;
    current: number;
}

export interface WindSpeed {
    avg: number;
    max: number;
    min: number;
    current: number;
}

export interface Temperature {
    actual: string;
}

export interface WindDirection {
    // directionality in degrees
    avg: number;
    max: number;
    min: number;
    current: number;
}
