import './live-scoring-loading.styles.css';
import type React from 'react';
import { CosmosIconLoading, CosmosTitle } from '@cosmos/web-scoped/react';
import type { CustomScriptLocalisations } from '@types';
import { useLocalisationsContext } from '@hooks/use-localisations-context.hook';

const LiveScoringLoadingComponent: React.FC = () => {
    const localisations: CustomScriptLocalisations = useLocalisationsContext();

    return (
        <div className="live-scoring-loading-container">
            <CosmosIconLoading className="live-scoring-loading-icon" />
            <CosmosTitle
                appearance="light"
                size="medium"
                spacing="long-form-top"
                tag="p"
                weight="bold"
                kind="normal"
            >
                {localisations.loadingMessage}
            </CosmosTitle>
        </div>
    );
};

export default LiveScoringLoadingComponent;
