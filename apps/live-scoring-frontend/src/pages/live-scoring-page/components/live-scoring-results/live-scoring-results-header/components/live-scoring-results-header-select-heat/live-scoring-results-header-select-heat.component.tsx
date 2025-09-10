import React from 'react';
import { CosmosOption, CosmosSelect } from '@cosmos/web-scoped/react';
import './live-scoring-results-header-select-heat.styles.css';
import { useLiveScoringStore } from '@stores/live-scoring-store/live-scoring.store.tsx';
import LiveScoringLiveIcon from '@pages/live-scoring-page/components/live-scoring-results/live-scoring-live-icon/live-scoring-live-icon.component.tsx';
import { EVENT_VIEWS } from '@enums/event-views.enum.ts';
import { HEAT_STATUS } from '@enums/heat-status.enum.ts';

const LiveScoringResultsHeaderSelectHeat = () => {
    const currentView = useLiveScoringStore((state) => state.currentView);
    const currentClass = useLiveScoringStore((state) => state.currentClass);
    const currentHeatId = useLiveScoringStore((state) => state.currentHeatId);

    if (currentView !== EVENT_VIEWS.Detailed) {
        return null;
    }

    // const resultState = state[EVENT_CLASSES_TO_EVENT_DATA_NAME[currentClass]];
    //
    // if (isNil(resultState)) {
    //     return null;
    // }
    //
    // Get heat from heat id
    // const heatMap = resultState.heatMap;
    const allHeatsArray: { heatId: string; name: string; status: string }[] = [
        { heatId: '', name: '', status: '' },
    ];
    // const allHeatsArray = Object.values(heatMap)
    //     .reduce((acc, heatRounds) => [...acc, ...heatRounds])
    //     .sort((a, b) => a.name.replace(/\D/g, '') - b.name.replace(/\D/g, ''));
    //
    const currentHeat = { heatId: '', name: '', status: '' };
    // const currentHeat = allHeatsArray.find(
    //     (heat) => heat.heatId === currentHeatId,
    // );
    //
    // if (isNil(currentHeat) || typeof currentHeat !== 'object') {
    //     return null;
    // }

    const updateHeatSelection = (event: any) => {
        // const heatId = event.detail.value;
        // const type = 'UPDATE_CURRENT_HEAT';
        // const payload = {
        //     heatId,
        // };
        // dispatch({
        //     type,
        //     payload
        // });
    };

    return (
        <div className="live-scoring-results-header-select-heat-container">
            <CosmosSelect
                value={currentHeat.heatId ?? undefined}
                onInputchange={(value) => updateHeatSelection(value)}
            >
                {allHeatsArray.map((heat, index) => (
                    <CosmosOption key={heat.heatId} value={heat.heatId}>
                        <div className="heat-option-container">
                            {heat.name}
                            <div className="heat-option-indicator">
                                {heat.status === HEAT_STATUS.InProgress && (
                                    <LiveScoringLiveIcon />
                                )}
                            </div>
                        </div>
                    </CosmosOption>
                ))}
            </CosmosSelect>
        </div>
    );
};

export default LiveScoringResultsHeaderSelectHeat;
