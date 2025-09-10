import React, {useContext} from 'react';
import {RoundResultsHeatContainer, RoundResultsOverviewContainer} from "./round-results-overview.sc";
import HeatResultsOverview from "../heat-results-overview/heat-results-overview.component";
import PropTypes from "prop-types";
import {CosmosText} from "@cosmos/web-scoped/react";
import {
    LiveScoringEventResultContext,
} from "../../../../../../context/live-scoring-state.context";

const RoundResultsOverview = ({round}) => {
    const state = useContext(LiveScoringEventResultContext)

    const roundId = round.roundId;
    const heats = state.heatMap[roundId];

        return (
        <RoundResultsOverviewContainer>
            <CosmosText spacing="long-form-bottom" weight="bold" appearance="dark" kind="normal" size="small@small medium@medium">{round.name}</CosmosText>
            <RoundResultsHeatContainer>
                {heats.map((heat, index) => (<HeatResultsOverview heat={heat} key={index}></HeatResultsOverview>))}
            </RoundResultsHeatContainer>
        </RoundResultsOverviewContainer>
    );
}

RoundResultsOverview.propTypes = {
    round: PropTypes.object
}

export default RoundResultsOverview;