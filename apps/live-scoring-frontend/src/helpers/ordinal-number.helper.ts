/**
 * Generates the ordinal suffix for a given integer and
 * returns the combined ordinal number as a string.
 *
 * The function appends the appropriate ordinal suffix based on English grammar rules:
 * - 'st' for 1 (unless ending in 11)
 * - 'nd' for 2 (unless ending in 12)
 * - 'rd' for 3 (unless ending in 13)
 * - 'th' for all other numbers
 *
 * @param {number} i The input number for which the ordinal suffix is to be generated.
 * @returns {string} The input number appended with its appropriate ordinal suffix.
 */
export const ordinalNumberHelper = (i: number): string => {
    const j: number = i % 10;
    const k: number = i % 100;
    let ordinal: string = 'th';
    if (j === 1 && k !== 11) {
        ordinal = 'st';
    }
    if (j === 2 && k !== 12) {
        ordinal = 'nd';
    }
    if (j === 3 && k !== 13) {
        ordinal = 'rd';
    }

    return `${i}${ordinal}`;
}

