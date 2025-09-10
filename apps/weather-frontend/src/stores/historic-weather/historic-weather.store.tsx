import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import {HistoricData, HistoricWeatherState} from '@stores/historic-weather/historic-weather.state';
import { TimeLineWind } from '@shared/models/historic-results-response.model';
import { DateTime } from 'luxon';

/**
 * The Historic Weather Store middleware
 * @param {StateCreator<HistoricWeatherState, [], []>} state
 */
const storeMiddleware = (state: StateCreator<HistoricWeatherState, [], []>) =>
    devtools(state, {
        store: 'megaloop-historic-weather-store',
        enabled: true,
        name: 'megaloop-historic-weather-store',
    });

export const useHistoricWeatherStore = create<HistoricWeatherState>()(
    storeMiddleware((set, get) => ({
        isLoading: false,
        setIsLoading: (isLoading: boolean) => set({ isLoading }),

        hasError: false,
        setHasError: (hasError: boolean) => set({ hasError }),

        setIsLoadingHasError: (isLoading: boolean, hasError: boolean) => set({ isLoading, hasError }),

        data: [],
        setData: (data: TimeLineWind[]) => {
                const formattedTimeData: HistoricData[] = data.map((entry: TimeLineWind) => {
                        return {
                                ...entry,
                                date: DateTime.fromISO(entry.dateTime, {zone: 'utc'}).toMillis(),
                        }
                })
                return set({data: formattedTimeData})
        },
    })),
);
