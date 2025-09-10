import React from 'react';
import './heat-results-overview.styles.css';

const HeatResultsOverview = ({ heat }) => {
    // const { dispatch } = useLiveScoringState();

    const setNewCurrentHeat = (heatId) => {
        // // Set the round up too
        // const type = 'UPDATE_CURRENT_HEAT';
        // const payload = {
        //     heatId,
        // };
        // dispatch({
        //     type,
        //     payload
        // });
        // changeToDetailedViewForHeat()
    };

    const changeToDetailedViewForHeat = () => {
        // const type = 'UPDATE_VIEW';
        // const payload = {
        //     newView: EVENT_VIEWS.Detailed,
        // };
        // dispatch({
        //     type,
        //     payload
        // });
    };

    // const resultState = useContext(LiveScoringEventResultContext)
    //
    // const heatAthletes = resultState.heatAthletesMap[heat.heatId] || [];
    // const progressionAthletes = heat.metadata.data.progressionAthletes || [];
    //
    // const athletesToShow = [...heatAthletes, ...progressionAthletes]
    //
    // const isHeatUpcoming = heat.status === HEAT_STATUS.NotDoneYet;
    // const isHeatLive = heat.status === HEAT_STATUS.InProgress;
    // const isHeatComplete = heat.status === HEAT_STATUS.Complete;

    return (
        <div className="heat-results-overview-container">
            {/*<div className="heat-header-container">*/}
            {/*    <CosmosText weight="regular" appearance="dark" kind="subtle" size="xx-small" spacing="long-form-bottom">{heat.name}</CosmosText>*/}
            {/*    {isHeatLive ? <div className="heat-live-indicator" /> : null}*/}
            {/*</div>*/}
            {/*<div className="heat-results-athlete-overview-container" onClick={() => setNewCurrentHeat(heat.heatId)}>*/}
            {/*    {*/}
            {/*        athletesToShow.map((athlete, index) =>*/}
            {/*            <HeatAthleteOverview key={index} heatAthlete={athlete} isHeatComplete={isHeatComplete} isHeatUpcoming={isHeatUpcoming}></HeatAthleteOverview>*/}
            {/*        )*/}
            {/*    }*/}
            {/*</div>*/}
        </div>
    );
};

export default HeatResultsOverview;
