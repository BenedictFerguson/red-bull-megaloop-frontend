import { createContext } from 'react'

export const LiveScoringStateContext = createContext(null);
export const LiveScoringEventResultContext = createContext(null);

/**
 * heatAthletesMap: {
 *     [heatId: string]: HeatAthlete[]
 * }
 */
/**
 * eventAthleteMap: {
 *     [eventAthleteId: string]: { ...EventAthlete, athlete: Athlete}
 * }
 */

/**
 * heatmap: {
 *     [roundId: string]: Heat[]
 * }
 */

/**
 * athleteMap: {
 *     [athleteId: string]: Athlete
 * }
 */