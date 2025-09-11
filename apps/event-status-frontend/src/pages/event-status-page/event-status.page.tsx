import './event-status.styles.css';
import { useAppStore } from '@stores/app/app.store';
import type React from 'react';
import { useEffect } from 'react';
import {AppState} from '@stores/app/app.state';

const EventStatusPage: React.FC<Record<string, never>> = () => {
    const apiUrl = useAppStore((state: AppState) => state.apiUrl);
    const assetId = useAppStore((state: AppState) => state.assetId);

    useEffect(() => {
        // EventService.getInstance().fetchEvents(apiUrl, assetId).then();
    }, [
        apiUrl,
        assetId,
    ]);

    return (
        <div
            className={`weather-container`}
        >
            {/*{isLoading && <LoadingComponent />}*/}
            {/*{hasError && <ErrorComponent />}*/}
            {/*{isEventReady && <WeatherResultsComponent />}*/}
        </div>
    );
};

export default EventStatusPage;
