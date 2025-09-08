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

export type AppProps = {
    topSpacing: string;
    bottomSpacing: string;
    apiUrl: string;
    assetUrl: string;
    assetId: string;
    tenantCredentials: TenantCredentials;
    localisations: CustomScriptLocalisations;
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

    return (
        <div className={classes}>
            <LocalisationsContext.Provider value={localisations}>
                <GridHelper shouldDisplay={showGridLines} />
                <div className="app-container">
                    <RouterProvider router={router} />
                </div>
            </LocalisationsContext.Provider>
        </div>
    );
};

export default App;
