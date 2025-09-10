import React, {useContext} from 'react';
import {
    HeatHeaderContainer, HeatLiveIndicator,
    HeatResultsAthleteOverviewContainer,
    HeatResultsOverviewContainer
} from "./heat-results-overview.sc";
import PropTypes from "prop-types";
import {
    LiveScoringEventResultContext,
} from "../../../../../../context/live-scoring-state.context";
import HeatAthleteOverview from "../heat-athlete-overview/heat-athlete-overview.component";
import {CosmosText} from "@cosmos/web-scoped/react";
import {useLiveScoringState} from "../../../../../../hooks/use-live-scoring-state.hook";
import {EVENT_VIEWS} from "../../../../constants/event-views.constant";
import {HEAT_STATUS} from "../../../../../../constants/heat-status.constant";

const HeatResultsOverview = ({heat}) => {
    const { dispatch } = useLiveScoringState();

    const setNewCurrentHeat = (heatId) => {
        // Set the round up too
        const type = 'UPDATE_CURRENT_HEAT';
        const payload = {
            heatId,
        };
        dispatch({
            type,
            payload
        });
        changeToDetailedViewForHeat()
    };

    const changeToDetailedViewForHeat = () => {
        const type = 'UPDATE_VIEW';
        const payload = {
            newView: EVENT_VIEWS.Detailed,
        };
        dispatch({
            type,
            payload
        });
    }

    const resultState = useContext(LiveScoringEventResultContext)

    const heatAthletes = resultState.heatAthletesMap[heat.heatId] || [];
    const progressionAthletes = heat.metadata.data.progressionAthletes || [];

    const athletesToShow = [...heatAthletes, ...progressionAthletes]

    const isHeatUpcoming = heat.status === HEAT_STATUS.NotDoneYet;
    const isHeatLive = heat.status === HEAT_STATUS.InProgress;
    const isHeatComplete = heat.status === HEAT_STATUS.Complete;

    return (
        <HeatResultsOverviewContainer>
            <HeatHeaderContainer>
                <CosmosText weight="regular" appearance="dark" kind="subtle" size="xx-small" spacing="long-form-bottom">{heat.name}</CosmosText>
                {isHeatLive ? <HeatLiveIndicator width="8px" height="8px"></HeatLiveIndicator> :null}
            </HeatHeaderContainer>
            <HeatResultsAthleteOverviewContainer onClick={() => setNewCurrentHeat(heat.heatId)}>
                {
                    athletesToShow.map((athlete, index) =>
                        <HeatAthleteOverview key={index} heatAthlete={athlete} isHeatComplete={isHeatComplete} isHeatUpcoming={isHeatUpcoming}></HeatAthleteOverview>
                    )
                }
            </HeatResultsAthleteOverviewContainer>
        </HeatResultsOverviewContainer>
    );
};

HeatResultsOverview.propTypes = {
    heat: PropTypes.object
}

export default HeatResultsOverview;