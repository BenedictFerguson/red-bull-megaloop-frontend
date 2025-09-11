import React from 'react';
import PropTypes from 'prop-types';
import './detailed-results-athlete-stack.styles.css';
import AthleteCarousalCard from '../athlete-carousal-card/athlete-carousal-card.component';

const DetailedResultsAthleteStack = ({ athletesToShow, isHeatUpcoming }) => {
    const athleteCards = athletesToShow.map((heatAthlete, index) =>
        <AthleteCarousalCard key={index} heatAthlete={heatAthlete} isHeatUpcoming={isHeatUpcoming} />,
    );

    return (
        <div className="detailed-results-athlete-stack__container">
            {athleteCards}
        </div>
    );
};

DetailedResultsAthleteStack.propTypes = {
    athletesToShow: PropTypes.array.isRequired,
    isHeatUpcoming: PropTypes.bool.isRequired,
};

export default DetailedResultsAthleteStack;