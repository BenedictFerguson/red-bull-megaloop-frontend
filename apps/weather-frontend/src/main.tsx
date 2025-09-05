import React from 'react';
import ReactDOM from 'react-dom/client';
import type {
    CustomScript,
    CustomScriptLocalisations,
    CustomScriptParams,
} from '@types';
import './styles/main.css';
import AppComponent, { type AppProps } from '@app/app.component';

const generateLocalisations = (): CustomScriptLocalisations => {
    const translations: { [key: string]: string } =
        window.RBGEMC_TRANSLATIONS || {};

    const translationConfig: CustomScriptLocalisations = {
        liveStandings:
            translations['rbca.live_standings.caption'] || 'Live Standings',
        historicalStandings:
            translations['rbca.historical_standings.caption'] ||
            'Historical Standings',
        currentRider:
            translations['rbca.current_rider.caption'] || 'Current Rider',
        lastRider: translations['rbca.last_rider.caption'] || 'Last Rider',
        rank: translations['rbca.rank.caption'] || 'Rank',
        rider: translations['rbca.rider.caption'] || 'Rider',
        split: translations['rbca.split.caption'] || 'Split',
        total: translations['rbca.total.caption'] || 'Total',
        diff: translations['rbca.diff.caption'] || 'Diff',
        splitLeader:
            translations['rbca.split_leader.caption'] || 'Split Leader',
        roundLeader:
            translations['rbca.round_leader.caption'] || 'Round Leader',
        roundDiff: translations['rbca.round_diff.caption'] || 'Round Diff',
        lastRoundDiff:
            translations['rbca.last_round_diff.caption'] || 'Last Round Diff',
        qualification:
            translations['rbca.qualification.caption'] || 'Qualification',
        final: translations['rbca.final.caption'] || 'Final',
        qualifier: translations['rbca.qualifiers.caption'] || 'Qualifier',
        points: translations['rbca.points.caption'] || 'Points',
        year: translations['rbca.year.caption'] || 'Year',
        errorMessage:
            translations['rbca.state_of_play_error_message.caption'] ||
            'Something went wrong',
        loadingMessage:
            translations['rbca.state_of_play_loading_message.caption'] ||
            'Loading',
        preEventMessage:
            translations['rbca.state_of_play_pre_event_message.caption'] ||
            'Stay tuned, the event will begin soon.',
    };

    return translationConfig;
};

export const { start, attach }: CustomScript = {
    /*
     * The start function is called when the custom script panel is rendered
     * (e.g. when the user navigates to a page where the custom script is configured).
     * Do as much work as possible here, especially data loading. Contrary to attach(),
     * the start method is asynchronous and any work done here delays the processing of subsequent panels.
     * This minimizes layout shifts.
     */
    start: async (params: CustomScriptParams) => {
        /*
         * el:         contains the element the custom script can use to attach itself to
         * config:     contains everything from the scriptConfig in the XC
         * options:    contains some utility functions for custom scripts (see examples for more information)
         */
        const { el, config } = params;
        const localisations: CustomScriptLocalisations =
            generateLocalisations();

        const appConfig: AppProps = { ...config, localisations } as AppProps;

        // Render the React component to the DOM element
        const root = ReactDOM.createRoot(el);
        root.render(<AppComponent {...appConfig} />);
    },
    /*
     * The attach function is called as soon as the custom script is ready to access the DOM elements.
     * If you need to modify DOM elements, make sure to implement your desired behavior in this function
     * to ensure that it doesn't access elements that are not yet set up in the DOM.
     */
    attach: () => {},
};
