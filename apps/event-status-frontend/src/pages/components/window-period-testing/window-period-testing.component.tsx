import React from "react";
import './window-period-testing.styles.css';
import {CosmosButton} from '@cosmos/web-scoped/react';
import {useAppStore} from '@stores/app/app.store';
import WINDOW_PERIOD_CONFIG from '@constants/window-period-config.constant';

const WindowPeriodTesting = () => {
    const setWindowPeriodStatus = useAppStore((state) => state.setWindowPeriodStatus);
    const possibleStatuses = Object.keys(WINDOW_PERIOD_CONFIG);
    return (
        <div className="window-period-testing-container">
            { possibleStatuses.map((status) => (<CosmosButton onClick={() => setWindowPeriodStatus(status)}>{status}</CosmosButton>))}
        </div>
    );
};

export default WindowPeriodTesting;
