import React, { Fragment } from 'react';
import {
    AthleteRankText, BreakdownTable,
    BreakdownTableContainer,
    BreakdownTableHeadingText,
    DataContainer,
    DetailedResultBreakdownContainer,
    HeaderContainer, HeaderRow,
    HeaderTitleContainer,
    HeaderTitleText,
    RowContainer,
    TrickCountDisplayContainer,
    TrickNumberContainer,
    TricksContainer,
} from './detailed-heat-breakdown.sc';
import PropTypes from 'prop-types';
import { CosmosTooltip } from '@cosmos/web-scoped/react';
import DetailedAthleteProfile
    from './detailed-heat-athlete-breakdown/detailed-athlete-profile/detailed-athlete-profile.component';
import DetailedAthleteTrick
    from './detailed-heat-athlete-breakdown/detailed-athlete-trick/detailed-athlete-trick.component';
import { isEmpty } from 'lodash';
import { ordinalNumberHelper } from '../../../../helpers/ordinal-number.helper';

const DetailedResultBreakdown = ({ athletesToShow, isHeatUpcoming }) => {
    // Get number of tricks to display
    const numberOfTricksToDisplayforHeat = isEmpty(athletesToShow) ? 0 : athletesToShow
        .map((athlete) => athlete.tricks.length).reduce((acc, trickCount) => acc > trickCount ? acc : trickCount);

    const formatAthleteRank = (flaggedOut, rankText) => {
        return (
            <Fragment>
                {
                    flaggedOut ?
                        (<CosmosTooltip appearance="light" content="Flagged out" placement="above" spacing="tight">
                            <AthleteRankText>FO</AthleteRankText>
                        </CosmosTooltip>)
                        : (<AthleteRankText>{rankText}</AthleteRankText>)
                }</Fragment>
        );
    };

    const formatAthleteToShow = (heatAthleteDetails) => {
        let rankToShow = isHeatUpcoming || heatAthleteDetails.rank === 0 ? 'TBC' : ordinalNumberHelper(heatAthleteDetails.rank);

        const numberOfTricksForAthlete = heatAthleteDetails.tricks.length;
        const blankTrickCount = numberOfTricksForAthlete < numberOfTricksToDisplayforHeat ? numberOfTricksToDisplayforHeat - numberOfTricksForAthlete : 0;

        return (
            <Fragment>
                <DataContainer>{formatAthleteRank(heatAthleteDetails.athlete.flaggedOut, rankToShow)}</DataContainer>
                <DataContainer>
                    <DetailedAthleteProfile athlete={heatAthleteDetails.athlete} />
                </DataContainer>
                <DataContainer>
                    <TricksContainer>
                        {
                            heatAthleteDetails.tricks
                                .sort((a, b) => a.metadata.data.order - b.metadata.data.order)
                                .map((trick, index) =>
                                    <DetailedAthleteTrick key={index} trick={trick} />,
                                )
                        }
                        {
                            blankTrickCount > 0 &&
                            Array.from({ length: blankTrickCount }, (_, i) => i + 1).map((number, index) =>
                                <DetailedAthleteTrick key={index} trick={null} />,
                            )
                        }
                    </TricksContainer>
                </DataContainer>
            </Fragment>
        );
    };

    return (
        <DetailedResultBreakdownContainer>
            <BreakdownTableHeadingText>Heat Breakdown</BreakdownTableHeadingText>
            <BreakdownTableContainer>
                <BreakdownTable>
                    <HeaderContainer>
                        <HeaderRow>
                            <HeaderTitleContainer>
                                <HeaderTitleText leftAlign={true}>Rank</HeaderTitleText>
                            </HeaderTitleContainer>
                            <HeaderTitleContainer>
                                <HeaderTitleText leftAlign={true}>Athlete</HeaderTitleText>
                            </HeaderTitleContainer>
                            <HeaderTitleContainer>
                                <HeaderTitleText>Tricks</HeaderTitleText>
                                <TrickCountDisplayContainer>
                                    {
                                        Array.from({ length: numberOfTricksToDisplayforHeat }, (_, i) => i + 1).map((number, index) =>
                                            <TrickNumberContainer
                                                key={index}
                                            >{number}</TrickNumberContainer>,
                                        )
                                    }
                                </TrickCountDisplayContainer>
                            </HeaderTitleContainer>
                        </HeaderRow>
                    </HeaderContainer>
                    <tbody>
                    {athletesToShow
                        .map((athleteToShow, index) =>
                            <RowContainer key={index}>{formatAthleteToShow(athleteToShow)}</RowContainer>)
                    }
                    </tbody>
                </BreakdownTable>
            </BreakdownTableContainer>
        </DetailedResultBreakdownContainer>
    );
};

DetailedResultBreakdown.propTypes = {
    athletesToShow: PropTypes.array.isRequired,
    isHeatUpcoming: PropTypes.bool.isRequired,
};

export default DetailedResultBreakdown;