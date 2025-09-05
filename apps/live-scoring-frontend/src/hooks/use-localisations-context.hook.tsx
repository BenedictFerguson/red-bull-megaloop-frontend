import { useContext } from 'react';
import LocalisationsContext from '../contexts/localisations.context';
import type { CustomScriptLocalisations } from '@types';
import isNil from 'lodash/isNil';

export const useLocalisationsContext = (): CustomScriptLocalisations => {
    const context: CustomScriptLocalisations | undefined =
        useContext(LocalisationsContext);
    if (isNil(context)) {
        throw new Error('LocalisationsContext is not defined');
    }
    return context;
};
