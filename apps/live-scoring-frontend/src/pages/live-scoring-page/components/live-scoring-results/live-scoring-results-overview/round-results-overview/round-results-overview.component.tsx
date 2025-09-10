import React from 'react';
import './round-results-overview.styles.css';
import {CosmosText} from '@cosmos/web-scoped/react';

const RoundResultsOverview = ({ round }) => {
    // const state = useContext(LiveScoringEventResultContext);
    //
    // const roundId = round.roundId;
    // const heats = state.heatMap[roundId];

    return (
        <div className="round-results-overview-container">
            <CosmosText
                spacing="long-form-bottom"
                weight="bold"
                appearance="dark"
                kind="normal"
                size="small@small medium@medium"
            >
                {round.name}
            </CosmosText>
            {/*<div className="round-results-heat-container">*/}
            {/*    {heats.map((heat, index) => (*/}
            {/*        <HeatResultsOverview*/}
            {/*            heat={heat}*/}
            {/*            key={index}*/}
            {/*        ></HeatResultsOverview>*/}
            {/*    ))}*/}
            {/*</div>*/}
        </div>
    );
};

export default RoundResultsOverview;
