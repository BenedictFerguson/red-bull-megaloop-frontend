import React from "react";
import './window-period.styles.css';
import { CosmosText, CosmosTitle } from '@cosmos/web-scoped/react';
import { useAppStore } from '@stores/app/app.store';
import { AppState } from '@stores/app/app.state';
import WINDOW_PERIOD_CONFIG from '@constants/window-period-config.constant';
import isNil from "lodash/isNil";

const WindowPeriod = () => {
    const windowPeriodStatus = useAppStore((state: AppState) => state.windowPeriodStatus);
    const startTime = useAppStore((state: AppState) => state.startTime);

    if (isNil(windowPeriodStatus)) {
        console.error('WindowPeriod not found.');
        return null;
    }

    const windowPeriodDetails = WINDOW_PERIOD_CONFIG[windowPeriodStatus];

  let copy = windowPeriodDetails.copy;
  if (windowPeriodStatus === "Start") {
    copy = copy.toString() + startTime.toString();
  }

  const containerClasses = ['window-period-container']
  if (windowPeriodDetails.className) {
      containerClasses.push(windowPeriodDetails.className);
  }
  return (
    <div className={containerClasses.join(' ')}>
        <CosmosTitle
            appearance="light"
            kind="normal"
            size="medium"
            spacing="none"
            weight="bold"
        >
            Event Status
        </CosmosTitle>
        <div className="window-period-icon-container">{windowPeriodDetails.icon}</div>
        <CosmosText
            appearance="light"
            kind="normal"
            size="medium"
            spacing="none"
            weight="bold"
            className="window-period-status-copy"
          >
            {copy}
        </CosmosText>
    </div>
  );
};

export default WindowPeriod;
