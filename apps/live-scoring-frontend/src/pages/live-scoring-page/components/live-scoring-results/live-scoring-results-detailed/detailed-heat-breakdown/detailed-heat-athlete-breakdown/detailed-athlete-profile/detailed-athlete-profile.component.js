import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CosmosFlag } from '@cosmos/web-scoped/react';
import {
    AthleteFlag,
    AthleteNameText,
    DetailedAthleteProfileAvatar,
    DetailedAthleteProfileContainer,
} from './detailed-athlete-profile.sc';
import { snakeCase } from 'lodash/string';
import { AppContext } from '../../../../../../../../context/app.context';

/**
 *     athlete: {
 *         pictureUrl: string,
 *         heatAthleteColor: string,
 *         flag: string, // athlete's nationality
 *         name: string,
 *         flaggedOut: boolean = false,
 *     },
 * @param athlete
 * @param isDetailed
 * @returns {JSX.Element}
 * @constructor
 */
// Potentially use this in the detailed view too?
const DetailedAthleteProfile = ({ athlete, className }) => {
    const { getImageUrl } = useContext(AppContext);

    const athleteImageFileName = snakeCase(`${athlete.name}`) + '.png';
    const athleteImageUrl = getImageUrl(athleteImageFileName);
    return (
        <DetailedAthleteProfileContainer className={className}>
            <DetailedAthleteProfileAvatar className={athlete.flaggedOut ? 'flagged-out' : ''}
                                          athleteColor={athlete.heatAthleteColor}
                                          name={athlete.name} src={athleteImageUrl}></DetailedAthleteProfileAvatar>
            {
                athlete.flag &&
                <AthleteFlag>
                    <CosmosFlag code={athlete.flag}></CosmosFlag>
                </AthleteFlag>
            }
            <AthleteNameText>{athlete.name}</AthleteNameText>
        </DetailedAthleteProfileContainer>
    );
};

DetailedAthleteProfile.propTypes = {
    athlete: PropTypes.object,
    className: PropTypes.string,
};

export default DetailedAthleteProfile;