import type React from 'react';
import { CosmosTitle } from '@cosmos/web-scoped/react';
import './live-scoring-header.styles.css';
import type { CustomScriptLocalisations } from '@types';
import { useLocalisationsContext } from '@hooks/use-localisations-context.hook';

const LiveScoringHeader: React.FC = () => {
    const localisations: CustomScriptLocalisations = useLocalisationsContext();

    return (
        <div className="live-scoring-header-container">
            <CosmosTitle
                className="live-scoring-header-title"
                size="medium@small large@medium"
                appearance="light"
            >
                {localisations.liveStandings}
            </CosmosTitle>
        </div>
    );
};

export default LiveScoringHeader;
