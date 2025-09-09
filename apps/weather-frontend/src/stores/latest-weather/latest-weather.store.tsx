import {create, type StateCreator} from 'zustand';
import {devtools} from 'zustand/middleware';
import {HistoricWeatherState} from "@stores/historic-weather/historic-weather.state.ts";
import {
    GustSpeed,
    LatestWeatherState,
    Results,
    Temperature, WindDirection,
    WindSpeed
} from "@stores/latest-weather/latest-weather.state.ts";

/**
 * The Historic Weather Store middleware
 * @param {StateCreator<LatestWeatherState, [], []>} state
 */
const storeMiddleware = (state: StateCreator<LatestWeatherState, [], []>) =>
    devtools(state, {
        store: 'megaloop-historic-weather-store',
        enabled: false,
        name: 'megaloop-historic-weather-store',
    });

export const useLatestWeatherStore = create<LatestWeatherState>()(
    storeMiddleware((set, get) => ({
        dateTime: '',
        gustSpeed: {
            avg: 0,
            max: 0,
            min: 0,
            current: 0,
        },
        // getCurrentGustSpeed: (): number => get().gustSpeed.current,

        windChill: '',
        windSpeed: {
            avg: 0,
            max: 0,
            min: 0,
            current: 0,
        },
        temperature: {
            actual: '',
        },
        windDirection: {
            avg: 0,
            max: 0,
            min: 0,
            current: 0,
        },
        setResults: (results: Results) => set({ ...results }),
    })),
);
