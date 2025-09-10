import './live-scoring-pre-event.styles.css';
import type React from 'react';
import { CosmosTitle } from '@cosmos/web-scoped/react';
import type { CustomScriptLocalisations } from '@types';
import { useLocalisationsContext } from '@hooks/use-localisations-context.hook';

const LiveScoringPreEvent: React.FC = () => {
    const localisations: CustomScriptLocalisations = useLocalisationsContext();

    return (
        <div className="live-scoring-pre-event-container">
            <CosmosTitle appearance="light" size="medium">
                {localisations.preEventMessage}
            </CosmosTitle>
        </div>
    );
};

export default LiveScoringPreEvent;
