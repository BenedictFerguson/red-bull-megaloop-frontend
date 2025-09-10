import React from "react";

export const AppContext = React.createContext({
    assetUrl: null,
    apiUrl: null,
    socketUrl: null,
    socketPath: null,
    eventSeriesExternalId: null,
    getImageUrl: () => {
    },
    getApiUrl: () => {
    }
});