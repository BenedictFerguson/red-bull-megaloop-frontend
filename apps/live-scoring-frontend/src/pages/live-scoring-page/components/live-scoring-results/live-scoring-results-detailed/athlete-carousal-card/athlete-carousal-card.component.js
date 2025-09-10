import React from 'react';
import PropTypes from "prop-types";
import {
    AthleteCarousalCardContainer,
    ImpressionScoreRow,
    ScoreText,
    ScoreTypeText, TotalScoreRow
} from "./athlete-carousal-card.sc";
import DetailedAthleteProfile
    from '../detailed-heat-breakdown/detailed-heat-athlete-breakdown/detailed-athlete-profile/detailed-athlete-profile.component';
import LiveScoringHeatAthleteLiveImpression
    from './live-scoring-heat-athlete-live-impression/live-scoring-heat-athlete-live-impression.component';

const AthleteCarousalCard = ({heatAthlete, isHeatUpcoming}) => {
    // Warning: make sure to check that progression athletes still show
    const impressionScore = isHeatUpcoming ? 'TBC' : `${heatAthlete.impressionScore} pts`;
    const score = isHeatUpcoming ? 'TBC' : `${heatAthlete.score} pts`;

    return (
        <AthleteCarousalCardContainer>
            <DetailedAthleteProfile className="carousal" athlete={heatAthlete.athlete}></DetailedAthleteProfile>
            {
                heatAthlete.underFlagout ? null :
                    <LiveScoringHeatAthleteLiveImpression liveImpressionScores={heatAthlete.liveImpressionScores}></LiveScoringHeatAthleteLiveImpression>
            }
            <ImpressionScoreRow>
                <ScoreTypeText>Impression Score</ScoreTypeText>
                <ScoreText>{impressionScore}</ScoreText>
            </ImpressionScoreRow>
            <TotalScoreRow>
                <ScoreTypeText>Total Score</ScoreTypeText>
                <ScoreText>{score}</ScoreText>
            </TotalScoreRow>
        </AthleteCarousalCardContainer>
    );
};

AthleteCarousalCard.propTypes = {
    heatAthlete: PropTypes.object.isRequired,
    isHeatUpcoming: PropTypes.bool.isRequired,
}

export default AthleteCarousalCard;