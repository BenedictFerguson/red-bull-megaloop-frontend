import React from 'react';
import PropTypes from "prop-types";
import {DetailedResultsAthleteCarousalContainer} from "./detailed-results-athlete-carousal.sc";
import Rail from '../../../Rail/Rail';
import RailCard from '../../../RailCard/RailCard';
import AthleteCarousalCard from '../athlete-carousal-card/athlete-carousal-card.component';

const DetailedResultsAthleteCarousal = ({athletesToShow, isHeatUpcoming}) => {
    const athleteCards = athletesToShow.map((heatAthlete, index) =>
        <RailCard key={index}>
            <AthleteCarousalCard heatAthlete={heatAthlete} isHeatUpcoming={isHeatUpcoming}/>
        </RailCard>
    )

    return (
        <DetailedResultsAthleteCarousalContainer>
            <Rail>{athleteCards}</Rail>
        </DetailedResultsAthleteCarousalContainer>
    );
};

DetailedResultsAthleteCarousal.propTypes = {
    athletesToShow: PropTypes.array.isRequired,
    isHeatUpcoming: PropTypes.bool.isRequired,
}

export default DetailedResultsAthleteCarousal;