export interface HistoricWeatherActions {
    setData: (data: any[]) => void;
}

export interface HistoricWeatherState extends HistoricWeatherActions {
    data: any[];
}