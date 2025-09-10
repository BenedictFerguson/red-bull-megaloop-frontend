import { useContext } from 'react';
import { LiveScoringStateContext } from '../context/live-scoring-state.context';

// Custom hook for accessing the context
export const useLiveScoringState = () => useContext(LiveScoringStateContext);