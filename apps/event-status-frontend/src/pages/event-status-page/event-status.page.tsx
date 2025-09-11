import './event-status.styles.css';
import { useAppStore } from '@stores/app/app.store';
import type React from 'react';
import { useEffect } from 'react';
import {AppState} from '@stores/app/app.state';
import WindowPeriod from "@pages/components/WindowPeriod/window-period.component.tsx";

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
            className={`event-status-container`}
        >
            <WindowPeriod></WindowPeriod>
        </div>
    );
};

export default EventStatusPage;
