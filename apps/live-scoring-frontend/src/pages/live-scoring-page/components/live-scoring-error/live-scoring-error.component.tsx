import './live-scoring-error.styles.css';
import type React from 'react';
import { CosmosIconErrorFilled, CosmosTitle } from '@cosmos/web-scoped/react';
import type { CustomScriptLocalisations } from '@types';
import { useLocalisationsContext } from '@hooks/use-localisations-context.hook';

const LiveScoringError = () => {
    const localisations: CustomScriptLocalisations = useLocalisationsContext();

    return (
        <div className="live-scoring-error-container">
            <CosmosIconErrorFilled className="live-scoring-error-icon" />
            <CosmosTitle
                appearance="light"
                size="medium"
                spacing="long-form-top"
                tag="p"
                weight="bold"
                kind="normal"
            >
                {localisations.errorMessage}
            </CosmosTitle>
        </div>
    );
};

export default LiveScoringError;
