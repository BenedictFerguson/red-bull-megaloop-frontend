import { EVENT_CLASSES } from '../pages/live-scoring-page/constants/event-classes.constants';
import {EVENT_VIEWS} from "../pages/live-scoring-page/constants/event-views.constant";

export const InitialLiveScoringStateState = {
    eventSeries: null,
    currentClass: EVENT_CLASSES.Women,
    currentView: EVENT_VIEWS.Overview,
    currentRoundId: null,
    currentHeatId: null,
    openEvent: null,
    womenEvent: null,
    eventDataNamesInitialised: [],
}