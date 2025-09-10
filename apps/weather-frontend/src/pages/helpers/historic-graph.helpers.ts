import {DateTime} from "luxon";
import isNil from "lodash/isNil";

const DATE_FORMAT = 'd MMM HH:mm'

export const formatEpochTimeForTooltip = (epochTime: number) => {
    const luxonDate = DateTime.fromMillis(epochTime, { zone: 'utc' })
    const relativeCalendar = luxonDate.toRelativeCalendar();
    const formattedDateTime = luxonDate.toFormat(DATE_FORMAT);

    if (isNil(relativeCalendar)) {
        return formattedDateTime;
    }
    return `${relativeCalendar?.charAt(0).toUpperCase() + relativeCalendar?.slice(1)}, ${formattedDateTime}`;
}
export const formatXAxis = (tickItem: any) => {
    const luxonDate = DateTime.fromMillis(tickItem, { zone: 'utc' })
    return luxonDate.toFormat(DATE_FORMAT);
};