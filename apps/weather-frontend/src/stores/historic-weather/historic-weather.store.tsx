import {create, type StateCreator} from 'zustand';
import {devtools} from 'zustand/middleware';
import {HistoricWeatherState} from "@stores/historic-weather/historic-weather.state.ts";

/**
 * The Historic Weather Store middleware
 * @param {StateCreator<HistoricWeatherState, [], []>} state
 */
const storeMiddleware = (state: StateCreator<HistoricWeatherState, [], []>) =>
    devtools(state, {
        store: 'megaloop-historic-weather-store',
        enabled: false,
        name: 'megaloop-historic-weather-store',
    });

export const useHistoricWeatherStore = create<HistoricWeatherState>()(
    storeMiddleware((set, get) => ({
        data: [],
        setData: (data: any[]) => set({ data }),
    })),
);
