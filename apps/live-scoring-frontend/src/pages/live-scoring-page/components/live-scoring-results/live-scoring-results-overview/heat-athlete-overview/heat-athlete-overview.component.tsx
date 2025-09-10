import './heat-athlete-overview.styles.css';

const HeatAthleteOverview = ({
    heatAthlete,
    isHeatUpcoming,
    isHeatComplete,
}) => {
    // const state = useContext(LiveScoringEventResultContext)
    //
    // let athleteNameToDisplay = '';
    // if (isNil(heatAthlete.eventAthleteId)) {
    //     athleteNameToDisplay = startCase(heatAthlete.name);
    // } else {
    //     const eventAthlete = state.eventAthleteMap[heatAthlete.eventAthleteId];
    //     const athlete = state.athleteMap[eventAthlete.athleteId];
    //     athleteNameToDisplay = athlete.name;
    // }
    //
    // const athleteObj = {
    //     color: heatAthlete.color || heatAthlete.metadata.data.color,
    //     name: athleteNameToDisplay,
    //     rank: heatAthlete.rank,
    //     flaggedOut: heatAthlete.metadata?.data.flaggedOut,
    // }
    //
    // return (
    //     <div className="heat-athlete-overview-container">
    //         <AthleteProfileOverview isHeatComplete={isHeatComplete} athlete={athleteObj}></AthleteProfileOverview>
    //         {(!isHeatUpcoming && heatAthlete?.score) && (
    //                         <CosmosText appearance="dark" kind="normal" size="x-small" spacing="none" weight="regular">
    //                             {heatAthlete.score} pts
    //                         </CosmosText>
    //                     )}
    //     </div>
    // );
};

export default HeatAthleteOverview;
