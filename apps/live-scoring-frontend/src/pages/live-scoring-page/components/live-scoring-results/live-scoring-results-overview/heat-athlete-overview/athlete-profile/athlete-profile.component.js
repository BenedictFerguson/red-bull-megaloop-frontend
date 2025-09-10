import React, { useContext } from 'react';
import PropTypes from "prop-types";
import {AthleteNameText, AthleteProfileAvatar, AthleteProfileContainer} from "./athlete-profile.sc";
import { AppContext } from '../../../../../../../context/app.context';
import { snakeCase } from 'lodash/string';

const AthleteProfileOverview = ({athlete, isHeatComplete}) => {
    const {getImageUrl} = useContext(AppContext);

    const isFirstInHeat = athlete?.rank ? athlete.rank === 1 : false;
    const nameShouldBeBold = isHeatComplete && isFirstInHeat;
    const athleteImageFileName = snakeCase(`${athlete.name}`) + '.png';
    const athleteImageUrl = getImageUrl(athleteImageFileName);

    return (
        <AthleteProfileContainer>
            <AthleteProfileAvatar src={athleteImageUrl} className={athlete.flaggedOut ? 'flagged-out' : ''} athleteColor={athlete.color}></AthleteProfileAvatar>
            <AthleteNameText isBold={nameShouldBeBold}>{athlete.name}</AthleteNameText>
        </AthleteProfileContainer>
    );
};

AthleteProfileOverview.propTypes = {
    athlete: PropTypes.object,
    isHeatComplete: PropTypes.bool
}

export default AthleteProfileOverview;