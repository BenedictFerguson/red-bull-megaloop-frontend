import './event-status.styles.css';
import { useAppStore } from '@stores/app/app.store';
import type React from 'react';
import {AppState} from '@stores/app/app.state';
import WindowPeriod from '@pages/components/WindowPeriod/window-period.component';
import isNil from 'lodash/isNil';

const EventStatusPage: React.FC<Record<string, never>> = () => {
    const windowPeriodStatus = useAppStore((state: AppState) => state.windowPeriodStatus);

    return (
        <div className="event-status-container">
            { !isNil(windowPeriodStatus) && (<WindowPeriod />)}
        </div>
    );
};

export default EventStatusPage;
