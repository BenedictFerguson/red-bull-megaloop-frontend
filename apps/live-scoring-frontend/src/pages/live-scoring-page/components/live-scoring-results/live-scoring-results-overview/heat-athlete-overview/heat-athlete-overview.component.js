import React, {useContext} from 'react';
import PropTypes from "prop-types";
import {LiveScoringEventResultContext} from "../../../../../../context/live-scoring-state.context";
import {HeatAthleteOverviewContainer, HeatAthleteScoreOverview} from "./heat-athlete-overview.sc";
import {isNil} from "lodash";
import AthleteProfileOverview from "./athlete-profile/athlete-profile.component";
import { startCase } from 'lodash';

const HeatAthleteOverview = ({heatAthlete, isHeatUpcoming, isHeatComplete}) => {
    const state = useContext(LiveScoringEventResultContext)

    let athleteNameToDisplay = '';
    if (isNil(heatAthlete.eventAthleteId)) {
        athleteNameToDisplay = startCase(heatAthlete.name);
    } else {
        const eventAthlete = state.eventAthleteMap[heatAthlete.eventAthleteId];
        const athlete = state.athleteMap[eventAthlete.athleteId];
        athleteNameToDisplay = athlete.name;
    }

    const athleteObj = {
        color: heatAthlete.color || heatAthlete.metadata.data.color,
        name: athleteNameToDisplay,
        rank: heatAthlete.rank,
        flaggedOut: heatAthlete.metadata?.data.flaggedOut,
    }

    return (
        <HeatAthleteOverviewContainer>
            <AthleteProfileOverview isHeatComplete={isHeatComplete} athlete={athleteObj}></AthleteProfileOverview>
            {(!isHeatUpcoming && heatAthlete?.score) && <HeatAthleteScoreOverview>{heatAthlete.score} pts</HeatAthleteScoreOverview>}
        </HeatAthleteOverviewContainer>
    );
};

HeatAthleteOverview.propTypes = {
    heatAthlete: PropTypes.object.isRequired,
    isHeatComplete: PropTypes.bool.isRequired,
    isHeatUpcoming: PropTypes.bool.isRequired,
}

export default HeatAthleteOverview;