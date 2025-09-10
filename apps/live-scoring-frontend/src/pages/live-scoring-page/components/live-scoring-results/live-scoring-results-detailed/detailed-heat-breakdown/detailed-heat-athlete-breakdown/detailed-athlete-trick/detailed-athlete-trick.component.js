import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { AthleteTrickScoreText, DetailedAthleteTrickContainer, TopScoreIcon } from './detailed-athlete-trick.sc';
import { CosmosIconClose, CosmosIconInfo, CosmosTooltip } from '@cosmos/web-scoped/react';
import { isNil } from 'lodash';

const DetailedAthleteTrick = ({ trick }) => {

    if (isNil(trick)) {
        return (
            <DetailedAthleteTrickContainer>
                <AthleteTrickScoreText topScore={false}>-</AthleteTrickScoreText>
            </DetailedAthleteTrickContainer>
        );
    }

    const isCrash = trick.name.toLowerCase().trim() === 'crash';
    const isInterference = trick.metadata.data.interference || false;
    const isBeingScored = trick.score === 0;
    // const isMostRecent = trick.metadata.data.isMostRecent || false;
    const isTopScore = trick.metadata.data.topScore || false;
    const name = trick.name;
    const score = trick.score;

    let nameToDisplay = name;
    let scoreTextToDisplay = score;

    if (isBeingScored) {
        scoreTextToDisplay = 'TBC';
    }

    if (isCrash) {
        nameToDisplay = 'Crash';
        scoreTextToDisplay = 'X';
    }

    if (isInterference) {
        nameToDisplay = 'Interference';
        scoreTextToDisplay = 'Int';
    }

    return (
        <DetailedAthleteTrickContainer>
            {isTopScore && (<TopScoreIcon topScore={isTopScore}></TopScoreIcon>)}
            <AthleteTrickScoreText topScore={isTopScore}>{isCrash ? (<CosmosIconClose></CosmosIconClose>) : (
                <Fragment>{scoreTextToDisplay}</Fragment>)}</AthleteTrickScoreText>
            <CosmosTooltip appearance="light" content={nameToDisplay} placement="above" spacing="tight">
                <CosmosIconInfo></CosmosIconInfo>
            </CosmosTooltip>
        </DetailedAthleteTrickContainer>
    );
};

DetailedAthleteTrick.propTypes = {
    trick: PropTypes.object,
};

export default DetailedAthleteTrick;