export class EventService {
    private static instance: EventService;

    public static getInstance(): EventService {
        if (!EventService.instance) {
            EventService.instance = new EventService();
        }
        return EventService.instance;
    }

    // public async fetchEvents(
    //     apiUrl: string,
    //     assetId: string | null,
    // ): Promise<void> {
    //     this.setComponentState(StateOfPlayComponentState.LOADING);
    //
    //     try {
    //         if (isNil(assetId)) {
    //             console.warn('Cannot get event without asset id.');
    //             return;
    //         }
    //         const headers = {
    //             'Content-Type': 'application/json',
    //         };
    //         const url = `${apiUrl}/event/cerro-abajo?assetId=${assetId}`;
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers,
    //         });
    //
    //         const getEventSeriesDataResponse = await response.json();
    //
    //         if (
    //             getEventSeriesDataResponse.success === false &&
    //             getEventSeriesDataResponse.status === 404
    //         ) {
    //             throw NotFoundError('Failed response - Not Found');
    //         }
    //         if (getEventSeriesDataResponse.success === false) {
    //             throw RequestError('Failed response - Success');
    //         }
    //         if (isNil(getEventSeriesDataResponse.payload)) {
    //             throw RequestError('Failed response - No Payload');
    //         }
    //
    //         this.processUpdate(getEventSeriesDataResponse.payload);
    //     } catch (error) {
    //         if (
    //             !isNil((error as ErrorDetails)?.errorType) &&
    //             (error as ErrorDetails)?.errorType === ErrorType.NOT_FOUND
    //         ) {
    //             console.warn('Event Series Not Found', error);
    //             this.setComponentState(StateOfPlayComponentState.PRE_EVENT);
    //             return;
    //         }
    //
    //         console.error('Failed to get event series data', error);
    //         this.setComponentState(StateOfPlayComponentState.ERROR);
    //     }
    // }
    //
    // processUpdate(socketData: SocketDataUpdateModel): void {
    //     const store = useStateOfPlayStore.getState();
    //     store.processSocketUpdate(socketData);
    //     switch (socketData.event.eventStatus) {
    //         case EventItemStatus.Complete:
    //         case EventItemStatus.InProgress:
    //             if (!this.checkHasActiveRound(socketData)) {
    //                 this.setComponentState(
    //                     StateOfPlayComponentState.POST_EVENT,
    //                 );
    //                 break;
    //             }
    //             this.setComponentState(StateOfPlayComponentState.SUCCESS);
    //             break;
    //         case EventItemStatus.NotDoneYet:
    //             this.setComponentState(StateOfPlayComponentState.PRE_EVENT);
    //             break;
    //         default:
    //             this.setComponentState(StateOfPlayComponentState.READY);
    //             break;
    //     }
    // }
    //
    // processSocketEvent(webSocketEvent: string): void {
    //     try {
    //         const data: SocketDataUpdateModel = JSON.parse(webSocketEvent);
    //         // Validate essential properties exist
    //         if (
    //             isNil(data) ||
    //             isNil(data.event) ||
    //             isNil(data.event.eventStatus)
    //         ) {
    //             console.error('Invalid WebSocket event data structure');
    //             return;
    //         }
    //         this.processUpdate(data);
    //     } catch (error) {
    //         console.error('Failed to parse WebSocket event', error);
    //     }
    // }
    //
    // private setComponentState(state: StateOfPlayComponentState): void {
    //     const store = useAppStore.getState();
    //     store.setComponentState(state);
    // }
    //
    // private checkHasActiveRound(socketUpdate: SocketDataUpdateModel) {
    //     if (isEmpty(socketUpdate.roundsMap)) {
    //         return false;
    //     }
    //     const activeRound = Object.values(socketUpdate.roundsMap).find(
    //         (round: RoundModel) => round.status === EventItemStatus.InProgress,
    //     );
    //     return !isEmpty(activeRound);
    // }
}
