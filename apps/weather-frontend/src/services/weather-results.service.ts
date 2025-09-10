import { useAppStore } from '@stores/app/app.store';
import isEmpty from 'lodash/isEmpty';
import { IntegratorEnum } from '@constants/integrator.enum';
import isNil from 'lodash/isNil';

export class WeatherResultsService {
    private static instance: WeatherResultsService;

    public static getInstance(): WeatherResultsService {
        if (!WeatherResultsService.instance) {
            WeatherResultsService.instance = new WeatherResultsService();
        }
        return WeatherResultsService.instance;
    }

    public async historicKsnWindResults() {
        const { apiUrl, tenantCredentials } = useAppStore.getState(); // Access store outside React components
        const { tenantClientId, tenantSecret } = tenantCredentials;
        console.warn({tenantCredentials})
        if (isEmpty(tenantClientId) || isEmpty(tenantSecret)) {
            console.error('Cannot request data with missing tenant credentials.');
            return;
        }
        // this.setState({
        //     hasError: false,
        //     isLoading: true,
        // })

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

        const stateUpdates = {
            isLoading: false,
        }

        if (
            getWeatherDataResponse.statusCode >= 400 ||
            getWeatherDataResponse.success === false
        ) {
            console.error('Failed to get weather data')
            // this.setState({
            //     ...stateUpdates,
            //     hasError: true,
            // })
            return
        }

        // TODO: Process data
    }

    public async getLatestKsnWindWeatherData() {
        const { apiUrl, tenantCredentials } = useAppStore.getState(); // Access store outside React components
        const { tenantClientId, tenantSecret } = tenantCredentials;

        if (isEmpty(tenantClientId) || isEmpty(tenantSecret)) {
            console.error('Cannot request data with missing tenant credentials.');
            return;
        }
        // this.setState({
        //     hasError: false,
        //     isLoading: true,
        // })

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

        const stateUpdates = {
            isLoading: false,
        }

        if (
            getWeatherDataResponse.statusCode >= 400 ||
            getWeatherDataResponse.success === false
        ) {
            console.error('Failed to get weather data')
            // this.setState({
            //     ...stateUpdates,
            //     hasError: true,
            // })
            return
        }

        const ksnwindResults = getWeatherDataResponse.payload.filter((integration: any) => integration?.integrator === IntegratorEnum.KSNWIND)

        if (isNil(ksnwindResults)) {
            console.error('Failed to get windguru weather data')
            // this.setState({
            //     ...stateUpdates,
            //     hasError: true,
            // })
            return
        }
console.warn(ksnwindResults)

    }


}

//     public async fetchHistoricWeatherResults(
//         apiUrl: string,
//     ): Promise<void> {
//     //     this.setComponentState(StateOfPlayComponentState.LOADING);
//     //
//         try {
//     //         if (isNil(assetId)) {
//     //             console.warn('Cannot get event without asset id.');
//     //             return;
//     //         }
//             const headers = {
//                 'Content-Type': 'application/json',
//             };
//             const url = `${apiUrl}/event/cerro-abajo?assetId=${assetId}`;
//             const response = await fetch(url, {
//                 method: 'GET',
//                 headers,
//             });
//
//             const getEventSeriesDataResponse = await response.json();
//     //
//     //         if (
//     //             getEventSeriesDataResponse.success === false &&
//     //             getEventSeriesDataResponse.status === 404
//     //         ) {
//     //             throw NotFoundError('Failed response - Not Found');
//     //         }
//     //         if (getEventSeriesDataResponse.success === false) {
//     //             throw RequestError('Failed response - Success');
//     //         }
//     //         if (isNil(getEventSeriesDataResponse.payload)) {
//     //             throw RequestError('Failed response - No Payload');
//     //         }
//     //
//     //         this.processUpdate(getEventSeriesDataResponse.payload);
//     //     } catch (error) {
//     //         if (
//     //             !isNil((error as ErrorDetails)?.errorType) &&
//     //             (error as ErrorDetails)?.errorType === ErrorType.NOT_FOUND
//     //         ) {
//     //             console.warn('Event Series Not Found', error);
//     //             this.setComponentState(StateOfPlayComponentState.PRE_EVENT);
//     //             return;
//     //         }
//     //
//     //         console.error('Failed to get event series data', error);
//     //         this.setComponentState(StateOfPlayComponentState.ERROR);
//     //     }
//     }
//     //
//     // processUpdate(socketData: SocketDataUpdateModel): void {
//     //     const store = useStateOfPlayStore.getState();
//     //     store.processSocketUpdate(socketData);
//     //     switch (socketData.event.eventStatus) {
//     //         case EventItemStatus.Complete:
//     //         case EventItemStatus.InProgress:
//     //             if (!this.checkHasActiveRound(socketData)) {
//     //                 this.setComponentState(
//     //                     StateOfPlayComponentState.POST_EVENT,
//     //                 );
//     //                 break;
//     //             }
//     //             this.setComponentState(StateOfPlayComponentState.SUCCESS);
//     //             break;
//     //         case EventItemStatus.NotDoneYet:
//     //             this.setComponentState(StateOfPlayComponentState.PRE_EVENT);
//     //             break;
//     //         default:
//     //             this.setComponentState(StateOfPlayComponentState.READY);
//     //             break;
//     //     }
//     // }
//     //
//     // processSocketEvent(webSocketEvent: string): void {
//     //     try {
//     //         const data: SocketDataUpdateModel = JSON.parse(webSocketEvent);
//     //         // Validate essential properties exist
//     //         if (
//     //             isNil(data) ||
//     //             isNil(data.event) ||
//     //             isNil(data.event.eventStatus)
//     //         ) {
//     //             console.error('Invalid WebSocket event data structure');
//     //             return;
//     //         }
//     //         this.processUpdate(data);
//     //     } catch (error) {
//     //         console.error('Failed to parse WebSocket event', error);
//     //     }
//     // }
//     //
//     // private setComponentState(state: StateOfPlayComponentState): void {
//     //     const store = useAppStore.getState();
//     //     store.setComponentState(state);
//     // }
//     //
//     // private checkHasActiveRound(socketUpdate: SocketDataUpdateModel) {
//     //     if (isEmpty(socketUpdate.roundsMap)) {
//     //         return false;
//     //     }
//     //     const activeRound = Object.values(socketUpdate.roundsMap).find(
//     //         (round: RoundModel) => round.status === EventItemStatus.InProgress,
//     //     );
//     //     return !isEmpty(activeRound);
//     // }
// }
