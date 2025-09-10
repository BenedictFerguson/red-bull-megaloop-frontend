import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.css';
import AppComponent, { type AppProps } from '@app/app.component';
import type {
    CustomScriptEnvironment,
    CustomScriptLocalisations,
} from '@types';

const root = document.getElementById('root') as HTMLElement;

const testLocalisations: CustomScriptLocalisations = {
    liveStandings: 'Live Standings',
    historicalStandings: 'Historical Standings',
    currentRider: 'Current Rider',
    lastRider: 'Last Rider',
    rank: 'Rank',
    rider: 'Rider',
    split: 'Split',
    total: 'Total',
    diff: 'Diff',
    splitLeader: 'Split Leader',
    roundLeader: 'Round Leader',
    roundDiff: 'Round Diff',
    lastRoundDiff: 'Last Round Diff',
    qualification: 'Qualification',
    final: 'Final',
    qualifier: 'Qualifier',
    points: 'Points',
    year: 'Year',
    errorMessage: 'Something went wrong',
    loadingMessage: 'Loading',
    preEventMessage: 'Stay tuned, the event will begin soon.',
};

const dev: CustomScriptEnvironment = {
    apiUrl: 'http://localhost:8080/api/v1',
    assetUrl: 'http://localhost:8080/public',
    assetId: 'rrn:content:event-profiles:416c2baf-7535-4e8b-9460-e854b1950b86',
    socketUrl: 'http://localhost:8080/',
    socketPath: '/socket.io',
    socketEventName: '',
};

const staging: CustomScriptEnvironment = {
    apiUrl: 'https://p-p.redbull.com/rb-red-bullf-diving-6e-77-stg/api/v1',
    assetUrl: 'https://p-p.redbull.com/rb-red-bullf-diving-6e-77-stg/public',
    assetId: 'rrn:content:event-profiles:8061d4c3-4ef2-4284-8915-cc15e09b35c6',
    socketUrl: 'https://p-p.redbull.com/',
    socketPath: '/rb-red-bullf-diving-6e-77-stg/socket.io',
    socketEventName: '',
};

const production: CustomScriptEnvironment = {
    apiUrl: 'https://p-p.redbull.com/rb-red-bullf-diving-6e-77-prod-34bf88e41923/api/v1',
    assetUrl:
        'https://p-p.redbull.com/rb-red-bullf-diving-6e-77-prod-34bf88e41923/public',
    assetId: 'rrn:content:event-profiles:416c2baf-7535-4e8b-9460-e854b1950b86',
    socketUrl: 'https://p-p.redbull.com/',
    socketPath: '/rb-red-bullf-diving-6e-77-prod-34bf88e41923//socket.io',
    socketEventName: '',
};

const env: CustomScriptEnvironment = dev;

const appProps: AppProps = {
    ...env,
    topSpacing: 'medium',
    bottomSpacing: 'medium',
    localisations: testLocalisations,
    showGridLines: false,
};

if (root) {
    ReactDOM.createRoot(root).render(
        <React.StrictMode>
            <AppComponent {...appProps} />
        </React.StrictMode>,
    );
}
