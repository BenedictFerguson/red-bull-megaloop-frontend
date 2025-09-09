import { create, type StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';
import { LatestWeatherState, Results } from '@stores/latest-weather/latest-weather.state';

/**
 * The Historic Weather Store middleware
 * @param {StateCreator<LatestWeatherState, [], []>} state
 */
const storeMiddleware = (state: StateCreator<LatestWeatherState, [], []>) =>
    devtools(state, {
        store: 'megaloop-latest-weather-store',
        enabled: false,
        name: 'megaloop-latest-weather-store',
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
