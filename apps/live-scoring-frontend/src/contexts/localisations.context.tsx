import { type Context, createContext } from 'react';
import type { CustomScriptLocalisations } from '@types';

const LocalisationsContext: Context<CustomScriptLocalisations | undefined> =
    createContext<CustomScriptLocalisations | undefined>(undefined);

export default LocalisationsContext;
