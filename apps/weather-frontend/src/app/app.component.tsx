import './app.styles.css';
import { router } from '@app/router';
import { useAppStore } from '@stores/app/app.store';
import { enableMapSet } from 'immer';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import type { CustomScriptLocalisations } from '@types';
import LocalisationsContext from '../contexts/localisations.context';
import GridHelper from '@app/components/grid-helper/grid-helper.component';
import { TenantCredentials } from '@shared/models/tenant-credentials.model';
import { CosmosMode } from '@cosmos/web-scoped/react';
import { CosmosTheme } from '@enums/cosmos-theme.enum';

export type AppProps = {
    topSpacing: string;
    bottomSpacing: string;
    apiUrl: string;
    assetUrl: string;
    assetId: string;
    tenantCredentials: TenantCredentials;
    localisations: CustomScriptLocalisations;
    theme: CosmosTheme;
    showGridLines?: boolean;
};

enableMapSet(); // Used by immer
const App: React.FC<AppProps> = ({
    topSpacing,
    bottomSpacing,
    apiUrl,
    assetUrl,
    assetId,
    tenantCredentials,
    localisations,
    theme = CosmosTheme.dark,
    showGridLines = false,
}: AppProps) => {
    // Panel Spacing Configuration
    let classes = 'app';
    if (topSpacing) {
        classes += ` top-${topSpacing}`;
    }
    if (bottomSpacing) {
        classes += ` bottom-${bottomSpacing}`;
    }

    const setApiUrl = useAppStore((state) => state.setApiUrl);
    const setAssetUrl = useAppStore((state) => state.setAssetUrl);
    const setAssetId = useAppStore((state) => state.setAssetId);
    const setTenantCredentials = useAppStore((state) => state.setTenantCredentials);
    const setTheme = useAppStore((state) => state.setTheme);

    useEffect(() => {
        if (!isNil(apiUrl) && !isEmpty(apiUrl)) {
            setApiUrl(apiUrl);
        }
    }, [
        apiUrl,
        setApiUrl,
    ]);

    useEffect(() => {
        if (!isEmpty(assetUrl)) {
            setAssetUrl(assetUrl);
        }
    }, [
        assetUrl,
        setAssetUrl,
    ]);

    useEffect(() => {
        if (!isEmpty(assetId)) {
            setAssetId(assetId);
        }
    }, [
        assetId,
        setAssetId,
    ]);

    useEffect(() => {
        if (!isEmpty(tenantCredentials)) {
            setTenantCredentials(tenantCredentials);
        }
    }, [
        tenantCredentials,
        setTenantCredentials,
    ]);

    useEffect(() => {
        if (!isEmpty(theme)) {
            setTheme(theme);
        }
    }, [
        theme,
        setTheme,
    ]);

    return (
        <div className={classes}>
            <LocalisationsContext.Provider value={localisations}>
                <GridHelper shouldDisplay={showGridLines} />
                <div className="app-container">
                    <CosmosMode mode={theme} >
                        <RouterProvider router={router} />
                    </CosmosMode>
                </div>
            </LocalisationsContext.Provider>
        </div>
    );
};

export default App;
