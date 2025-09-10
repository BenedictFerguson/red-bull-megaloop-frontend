import React from 'react';
import {CosmosOption, CosmosSelect} from '@cosmos/web-scoped/react';
import {useLiveScoringState} from "../../../../../../../hooks/use-live-scoring-state.hook";
import {
    HeatOptionContainer,
    HeatOptionIndicator,
    ResultsHeaderSelectHeatContainer
} from "./results-header-select-heat.sc";
import {isNil} from "lodash";
import {EVENT_VIEWS} from "../../../../../constants/event-views.constant";
import {EVENT_CLASSES_TO_EVENT_DATA_NAME} from "../../../../../constants/event-classes.constants";
import {HeatLiveIndicator} from "../../../live-scoring-results-overview/heat-results-overview/heat-results-overview.sc";
import {HEAT_STATUS} from "../../../../../../../constants/heat-status.constant";

const ResultsHeaderSelectHeat = () => {
    const { state, dispatch } = useLiveScoringState();
    const currentView = state.currentView;

    if (currentView !== EVENT_VIEWS.Detailed){
        return null
    }
    const currentClass = state.currentClass;
    const currentHeatId = state.currentHeatId;

    const resultState = state[EVENT_CLASSES_TO_EVENT_DATA_NAME[currentClass]];

    if (isNil(resultState)) {
        return null;
    }

    // Get heat from heat id
    const heatMap = resultState.heatMap;
    const allHeatsArray = Object.values(heatMap).reduce((acc, heatRounds) => [...acc, ...heatRounds])
        .sort((a, b) => a.name.replace(/\D/g, '') - b.name.replace(/\D/g, ''));

    const currentHeat = allHeatsArray.find((heat)=> heat.heatId === currentHeatId)

    if (isNil(currentHeat) || typeof currentHeat !== 'object') {
        return null;
    }

    const updateHeatSelection = (event) =>
    {
        const heatId = event.detail.value;
        const type = 'UPDATE_CURRENT_HEAT';
        const payload = {
            heatId,
        };
        dispatch({
            type,
            payload
        });
    }

    return (
        <ResultsHeaderSelectHeatContainer>
            <CosmosSelect value={currentHeat.heatId} onInputchange={(value)=> updateHeatSelection(value)}>
                    { allHeatsArray.map((heat, index) =>
                        <CosmosOption key={index} value={heat.heatId}>
                            <HeatOptionContainer>
                                {heat.name}
                                <HeatOptionIndicator>
                                    {heat.status === HEAT_STATUS.InProgress ? <HeatLiveIndicator width='12px' height='12px'></HeatLiveIndicator> : null}
                                </HeatOptionIndicator>
                            </HeatOptionContainer>
                        </CosmosOption>
                    )
                    }
            </CosmosSelect>
        </ResultsHeaderSelectHeatContainer>
    );
};

export default ResultsHeaderSelectHeat;