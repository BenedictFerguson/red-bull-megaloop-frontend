import { useAppStore } from '@stores/app/app.store';
import isEmpty from 'lodash/isEmpty';
import { IntegratorEnum } from '@constants/integrator.enum';
import isNil from 'lodash/isNil';
import { useLatestWeatherStore } from '@stores/latest-weather/latest-weather.store';
import { useHistoricWeatherStore } from '@stores/historic-weather/historic-weather.store';
import { TimeLineWind } from '@shared/models/historic-results-response.model';

export class WeatherResultsService {
    private static instance: WeatherResultsService;

    public static getInstance(): WeatherResultsService {
        if (!WeatherResultsService.instance) {
            WeatherResultsService.instance = new WeatherResultsService();
        }
        return WeatherResultsService.instance;
    }

    public async getHistoricKsnWindResults(): Promise<void> {
        const { apiUrl, tenantCredentials } = useAppStore.getState(); // Access store outside React components
        const { tenantClientId, tenantSecret } = tenantCredentials;

        if (isEmpty(tenantClientId) || isEmpty(tenantSecret)) {
            console.error('Cannot request data with missing tenant credentials.');
            return;
        }

        // Send the last updated time and store in the state

        const { isLoading, setIsLoadingHasError, setData } = useHistoricWeatherStore.getState();

        if (isLoading) {
            console.error('Data is already loading for the historic weather');
            return;
        }

        setIsLoadingHasError(true, false);

        let headers = {
            'Content-type': 'application/json',
            'x-tenant-client-id': `${tenantClientId}`,
            Authorization: `Bearer ${tenantSecret}`,
        }
        const integrator = 'ksnwind';
        const url = `${apiUrl}/historic-integrations/${integrator}`;

        const response = await fetch(url, {
            method: 'GET',
            headers,
        });

        const getWeatherDataResponse = await response.json();

        if (
            getWeatherDataResponse.statusCode >= 400 ||
            getWeatherDataResponse.success === false
        ) {
            console.error('Failed to get weather data')
            setIsLoadingHasError(false, true);
            return;
        }

        const historicResults: TimeLineWind[] = getWeatherDataResponse.payload;

        setData(historicResults);
        setIsLoadingHasError(false, false);
    }

    public async getLatestKsnWindWeatherData(): Promise<void> {
        const { apiUrl, tenantCredentials } = useAppStore.getState(); // Access store outside React components
        const { tenantClientId, tenantSecret } = tenantCredentials;

        if (isEmpty(tenantClientId) || isEmpty(tenantSecret)) {
            console.error('Cannot request data with missing tenant credentials.');
            return;
        }

        const { isLoading, dateTime, setIsLoadingHasError, setResults } = useLatestWeatherStore.getState();

        if (isLoading) {
            console.error('Data is already loading for the latest weather');
            return;
        }

        if (!isNil(dateTime)) {
            console.debug('TODO: Determine if we NEED to re-request the data here.')
        }

        setIsLoadingHasError(true, false);

        let headers = {
            'Content-type': 'application/json',
            'x-tenant-client-id': `${tenantClientId}`,
            Authorization: `Bearer ${tenantSecret}`,
        }

        const url = `${apiUrl}/integration/results`

        const response = await fetch(url, {
            method: 'GET',
            headers,
        })

        const getWeatherDataResponse = await response.json()

        if (
            getWeatherDataResponse.statusCode >= 400 ||
            getWeatherDataResponse.success === false
        ) {
            console.error('Failed to get weather data')
            setIsLoadingHasError(false, true);
            return;
        }

        const ksnwindResults = getWeatherDataResponse.payload.filter((integration: any) => integration?.integrator === IntegratorEnum.KSNWIND)

        if (isNil(ksnwindResults)) {
            console.error('Failed to get windguru weather data')
            setIsLoadingHasError(false, true);
            return;
        }

        const ksnwindLatestResult = ksnwindResults[0];

        setResults(ksnwindLatestResult.results);

        setIsLoadingHasError(false, false);
    }
}
