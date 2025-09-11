import React from "react";
import {
  CosmosIconFlag,
  CosmosIconHourglassEmpty,
  CosmosIconHourglassFull, CosmosIconSuccess,
  CosmosIconWarning
} from "@cosmos/web-scoped/react";

const getIcon = (iconComponent) => iconComponent;

const WINDOW_PERIOD_CONFIG = {
  "Open": {
    className: "open",
    copy: "Window Period Open",
    icon: getIcon(<CosmosIconSuccess className="status-icon" />),
  },
  "48-hours": {
    className: "two-days",
    copy: "48 Hours Out",
    icon: getIcon(<CosmosIconHourglassFull className="status-icon" />),
  },
  "24-hours": {
    className: "one-day",
    copy: "24 Hours Out",
    icon: getIcon(<CosmosIconHourglassEmpty className="status-icon" />),
  },
  "Start": {
    className: "on",
    copy: "First possible start at ",
    icon: getIcon(<CosmosIconFlag className="status-icon" />),
  },
  "On": {
    className: "on",
    copy: "It's on!",
    icon: getIcon(<CosmosIconFlag className="status-icon" />),
  },
  "Hold": {
    className: "hold",
    copy: "It's on hold",
    icon: getIcon(<CosmosIconWarning className="status-icon"  />),
  },
};

export default WINDOW_PERIOD_CONFIG;
