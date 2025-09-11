import React, {useContext} from 'react';
import {LiveScoringEventResultContext} from "../../../../../context/live-scoring-state.context";
import './detailed-results.styles.css';
import {useLiveScoringState} from "../../../../../hooks/use-live-scoring-state.hook";
import { isNil, startCase } from 'lodash';
import DetailedResultBreakdown from "./detailed-heat-breakdown/detailed-heat-breakdown.component";
import DetailedResultsAthleteCarousal
    from "./detailed-results-athlete-carousal/detailed-results-athlete-carousal.component";
import { HEAT_STATUS } from '../../../../../constants/heat-status.constant';
import DetailedResultsAthleteStack from './detailed-results-athlete-stack/detailed-results-athlete-stack.component';

const DetailedResults = () => {
    const resultState = useContext(LiveScoringEventResultContext)
    const { state } = useLiveScoringState();

    const currentHeatId = state.currentHeatId;

    if (isNil(currentHeatId)) {
        return null;
    }

    // Get heat from heat id
    const heatMap = resultState.heatMap;

    const allHeatsArray = Object.values(heatMap).reduce((acc, heatRounds) => [...acc, ...heatRounds])
    const heat = allHeatsArray.find((heat)=> heat.heatId === currentHeatId)

    if (isNil(heat) || typeof heat !== 'object') {
        console.error('Data error for current heat')
        return null;
    }

    const heatId = heat.heatId;
    const heatIsUpcoming = heat.status === HEAT_STATUS.NotDoneYet;
    const heatAthletes = resultState.heatAthletesMap[heatId] || []; // an array
    const underFlagout = heat.metadata.data.underFlagout;

    const mappedHeatAthletes = heatAthletes.map((heatAthlete) => {
        const eventAthlete = resultState.eventAthleteMap[heatAthlete.eventAthleteId]
        const athlete = resultState.athleteMap[eventAthlete.athleteId]
        return {
            rank: heatAthlete.rank,
            athlete: {
                heatAthleteColor: heatAthlete.metadata.data.color,
                flaggedOut: heatAthlete.metadata.data.flaggedOut,
                name: athlete.name,
                flag: athlete.nationality, // nationality
                pictureUrl: athlete.hasProfilePicture ? 'get-pic-url' : 'default'
            },
            tricks: heatAthlete.tricks,
            impressionScore: heatAthlete.metadata.data.impressionScore,
            liveImpressionScores: heatAthlete.metadata.data.liveImpressionScores,
            score: heatAthlete.score,
            underFlagout,
        }
    })
    const progressionAthletes = heat.metadata.data.progressionAthletes || []

    const mappedProgressionAthletes = progressionAthletes.map((progressionAthlete) => {
        return {
            rank: progressionAthlete.rank,
            athlete: {
                heatAthleteColor: progressionAthlete.color,
                flaggedOut: false,
                name: startCase(progressionAthlete.name),
                flag: null,
                pictureUrl: 'default'
            },
            tricks: [],
            impressionScore: null,
            liveImpressionScores: [],
            score: null,
            underFlagout,
        }
    })

    const athletesToShow = [...mappedHeatAthletes, ...mappedProgressionAthletes] || []
    // sort to ensure rounds are displaying in the correct order

    return (
        <div className="detailed-results-container">
            <DetailedResultsAthleteCarousal athletesToShow={athletesToShow} isHeatUpcoming={heatIsUpcoming}></DetailedResultsAthleteCarousal>
            <DetailedResultsAthleteStack athletesToShow={athletesToShow} isHeatUpcoming={heatIsUpcoming}></DetailedResultsAthleteStack>
            <DetailedResultBreakdown athletesToShow={athletesToShow} isHeatUpcoming={heatIsUpcoming}></DetailedResultBreakdown>
        </div>
    );
};

export default DetailedResults;