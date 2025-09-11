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
    icon: getIcon(<CosmosIconSuccess />),
  },
  "48-hours": {
    className: "two-days",
    copy: "48 Hours Out",
    icon: getIcon(<CosmosIconHourglassFull/>),
  },
  "24-hours": {
    className: "one-day",
    copy: "24 Hours Out",
    icon: getIcon(<CosmosIconHourglassEmpty />),
  },
  "Start": {
    className: "on",
    copy: "First possible start at ",
    icon: getIcon(<CosmosIconFlag />),
  },
  "On": {
    className: "on",
    copy: "It's on!",
    icon: getIcon(<CosmosIconFlag />),
  },
  "Hold": {
    className: "hold",
    copy: "It's on hold",
    icon: getIcon(<CosmosIconWarning />),
  },
};

export default WINDOW_PERIOD_CONFIG;
