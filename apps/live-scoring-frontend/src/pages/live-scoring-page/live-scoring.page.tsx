import './live-scoring-page.styles.css';
import React, { useContext, useEffect, useState } from 'react';
// import socketIOClient from 'socket.io-client';
// import { isEmpty, isNil } from 'lodash';
// import { stringify } from 'querystring-es3';
// import {
//     LiveScoringPageContainer,
//     LiveScoringPageContent,
// } from './live-scoring-page.sc';
// import { AppContext } from '../../context/app.context';
// import { RequestError } from './errors/request-error';
// import { useLiveScoringState } from '../../hooks/use-live-scoring-state.hook';
// import LiveScoringPreEvent from './components/live-scoring-pre-event/live-scoring-pre-event.component';
// import { NotFoundError } from './errors/not-found-error';
// import { ERROR_TYPE } from './constants/error-types.constant';
import LiveScoringLoading from './components/live-scoring-loading/live-scoring-loading.component';
// import LiveScoringError from './components/live-scoring-error/live-scoring-error.component';
// import LiveScoringEvent from './components/live-scoring-event/live-scoring-event.component';
// import LiveScoringResultsHeader from './components/live-scoring-results/live-scoring-results-header/live-scoring-results-header.component';
// import { EVENT_CLASSES_TO_EVENT_DATA_NAME } from './constants/event-classes.constants';
import LiveScoringHeaderComponent from '@pages/live-scoring-page/components/live-scoring-header/live-scoring-header.component.tsx';
import { useAppStore } from '@stores/app/app.store.tsx';
import type { AppState } from '@stores/app/app.state.ts';
import { ComponentState } from '@enums/component-state.enum.ts';

const LiveScoringPage = () => {
    const componentState = useAppStore(
        (state: AppState) => state.componentState,
    );
    // let socket;
    // const { socketUrl, socketPath, eventSeriesExternalId, getApiUrl } = useContext(AppContext);
    // const { state, dispatch } = useLiveScoringState();

    useEffect(() => {
        // addWebSocketLister();
        // fetchEvents();
        // return () => {
        //     if (!isNil(socket)) {
        //         socket.off('rb-kota-event-updated', handleWebSocketUpdate);
        //     }
        // };
    }, []);

    // const addWebSocketLister = () => {
    //     socket = socketIOClient(socketUrl, {
    //         path: socketPath,
    //     });
    //
    //     socket.on('rb-kota-event-updated', (websocketEvent) => handleWebSocketUpdate(websocketEvent));
    // };
    //
    // const fetchEvents = async () => {
    //     try {
    //         let headers = {
    //             'Content-type': 'application/json',
    //         };
    //         const queryParams = stringify({
    //             eventSeriesExternalId: eventSeriesExternalId,
    //         });
    //         const url = getApiUrl(`event/king-of-the-air?${queryParams}`);
    //
    //         const response = await fetch(url, {
    //             method: 'GET',
    //             headers,
    //         });
    //
    //         const getEventSeriesDataResponse = await response.json();
    //
    //         if (getEventSeriesDataResponse.success === false && getEventSeriesDataResponse.status === 404) {
    //             throw NotFoundError('Failed response - Not Found');
    //         } else if (getEventSeriesDataResponse.success === false) {
    //             throw RequestError('Failed response - Success');
    //         }
    //
    //         if (isNil(getEventSeriesDataResponse.payload)) {
    //             throw RequestError('Failed response - No Payload');
    //         }
    //
    //         // Handle Response
    //         handleEventUpdate(getEventSeriesDataResponse.payload);
    //     } catch (error) {
    //         if (!isNil(error.errorType) && error.errorType === ERROR_TYPE.NOT_FOUND) {
    //             console.warn('Event Series Not Found', error);
    //             setComponentState(COMPONENT_STATE.PRE_EVENT);
    //             return;
    //         }
    //
    //         console.error('Failed to get event series data', error);
    //         setComponentState(COMPONENT_STATE.ERROR);
    //     }
    // };
    //
    // const handleWebSocketUpdate = (websocketEventUpdate) => {
    //     const processedUpdate = JSON.parse(websocketEventUpdate);
    //     const eventDataNamesInitialised = state.eventDataNamesInitialised;
    //     const eventDataName = EVENT_CLASSES_TO_EVENT_DATA_NAME[processedUpdate.eventClass];
    //
    //     const type = 'UPDATE_EVENT';
    //     dispatch({
    //         type,
    //         payload: processedUpdate,
    //     });
    //
    //     if (!eventDataNamesInitialised.includes(eventDataName)) {
    //         setComponentState(COMPONENT_STATE.SUCCESS);
    //     }
    // };
    //
    // const handleEventUpdate = (eventUpdate) => {
    //     if (isNil(eventUpdate) || isNil(eventUpdate.events) || isEmpty(eventUpdate.events) || isNil(eventUpdate.eventSeries)) {
    //         return;
    //     }
    //
    //     const payload = {
    //         eventSeries: eventUpdate.eventSeries,
    //         openEvent: null,
    //         womenEvent: null,
    //     };
    //
    //     const events = eventUpdate.events;
    //     const openEvent = events.find((eventUpdate) => eventUpdate.event.metadata.data.class === 'Open') ?? null;
    //     const womenEvent = events.find((eventUpdate) => eventUpdate.event.metadata.data.class === 'Women') ?? null;
    //
    //     payload.openEvent = openEvent;
    //     payload.womenEvent = womenEvent;
    //
    //     const type = 'INIT_EVENTS';
    //     dispatch({
    //         type,
    //         payload,
    //     });
    //     setComponentState(COMPONENT_STATE.SUCCESS);
    // };

    return (
        <div className="live-scoring-page-container">
            <div className="live-scoring-page-content">
                <LiveScoringHeaderComponent />
                {/*<LiveScoringResultsHeader isComponentSuccessful={componentState === COMPONENT_STATE.SUCCESS}/>*/}
                {componentState === ComponentState.LOADING && (
                    <LiveScoringLoading />
                )}
                {/*{*/}
                {/*    componentState === COMPONENT_STATE.ERROR ? <LiveScoringError /> : null*/}
                {/*}*/}
                {/*{*/}
                {/*    componentState === COMPONENT_STATE.PRE_EVENT ? <LiveScoringPreEvent isEventReady={false} /> : null*/}
                {/*}*/}
                {/*{*/}
                {/*    componentState === COMPONENT_STATE.READY ? <LiveScoringPreEvent isEventReady={true} /> : null*/}
                {/*}*/}
                {/*{*/}
                {/*    componentState === COMPONENT_STATE.SUCCESS ? <LiveScoringEvent /> : null*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default LiveScoringPage;
