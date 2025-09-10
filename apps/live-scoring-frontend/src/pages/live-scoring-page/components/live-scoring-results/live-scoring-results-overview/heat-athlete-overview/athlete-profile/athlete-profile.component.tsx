import React, {CSSProperties} from 'react';
import './athlete-profile.styles.css';
import {CosmosAvatar, CosmosText} from '@cosmos/web-scoped/react';

export interface AthleteProfileOverviewProps {
    athlete: {
        name: string;
        flaggedOut: boolean;
        heatAthleteColor: string;
    };
    isHeatComplete: boolean;
}

const AthleteProfileOverview: React.FC<AthleteProfileOverviewProps> = ({
    athlete,
    isHeatComplete,
}: AthleteProfileOverviewProps) => {
    // const { getImageUrl } = useContext(AppContext);
    //
    const isFirstInHeat = athlete?.rank ? athlete.rank === 1 : false;
    const nameShouldBeBold = isHeatComplete && isFirstInHeat;
    const athleteImageFileName = `${snakeCase(`${athlete.name}`)}.png`;
    const athleteImageUrl = getImageUrl(athleteImageFileName);

    return (
        <div>
            <CosmosAvatar
                name={athlete.name}
                appearance="light"
                size="x-small"
                framed={false}
                src={athleteImageUrl}
                style={
                    {
                        '--avatar-border-color': athlete.heatAthleteColor,
                    } as CSSProperties
                }
            />
            <CosmosText
                appearance="dark"
                kind="normal"
                size="small"
                spacing="none"
            >
                {athlete.name}
            </CosmosText>
        </div>
    );
};

export default AthleteProfileOverview;
