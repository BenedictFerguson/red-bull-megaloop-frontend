import './live-scoring.styles.css';
import { useAppStore } from '@stores/app/app.store';
import type React from 'react';
import { useEffect } from 'react';
import {AppState} from "@stores/app/app.state.ts";

const LiveScoringPage: React.FC<Record<string, never>> = () => {
    const componentState = useAppStore((state: AppState) => state.componentState);
    const setComponentState = useAppStore((state: AppState) => state.setComponentState);

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
            className={`live-scoring-container`}
        >
            {/*{isLoading && <LoadingComponent />}*/}
            {/*{hasError && <ErrorComponent />}*/}
            {/*{isEventReady && <WeatherResultsComponent />}*/}
        </div>
    );
};

export default LiveScoringPage;
