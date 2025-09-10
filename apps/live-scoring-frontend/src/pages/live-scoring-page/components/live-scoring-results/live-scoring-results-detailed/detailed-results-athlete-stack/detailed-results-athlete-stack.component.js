import React from 'react';
import PropTypes from 'prop-types';
import { DetailedResultsAthleteStackContainer } from './detailed-results-athlete-stack.sc';
import AthleteCarousalCard from '../athlete-carousal-card/athlete-carousal-card.component';

const DetailedResultsAthleteStack = ({ athletesToShow, isHeatUpcoming }) => {
    const athleteCards = athletesToShow.map((heatAthlete, index) =>
        <AthleteCarousalCard key={index} heatAthlete={heatAthlete} isHeatUpcoming={isHeatUpcoming} />,
    );

    return (
        <DetailedResultsAthleteStackContainer>
            {athleteCards}
        </DetailedResultsAthleteStackContainer>
    );
};

DetailedResultsAthleteStack.propTypes = {
    athletesToShow: PropTypes.array.isRequired,
    isHeatUpcoming: PropTypes.bool.isRequired,
};

export default DetailedResultsAthleteStack;