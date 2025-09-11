import React from 'react';
import PropTypes from "prop-types";
import './detailed-results-athlete-carousal.styles.css';
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
        <div className="detailed-results-athlete-carousal__container">
            <Rail>{athleteCards}</Rail>
        </div>
    );
};

DetailedResultsAthleteCarousal.propTypes = {
    athletesToShow: PropTypes.array.isRequired,
    isHeatUpcoming: PropTypes.bool.isRequired,
}

export default DetailedResultsAthleteCarousal;