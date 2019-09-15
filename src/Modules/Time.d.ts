declare namespace Time {
  export function getDaysMonthTable(year: number): Array<number>;
  export function getSecond(currentTime: number): number;
  export function getMinute(currentTime: number): number;
  export function getHour(currentTime: number): number;
  export function getDay(currentTime: number): number;
  export function getYear(currentTime: number): number;
  export function getYearShort(currentTime: number): number;
  export function getYearShortFormatted(currentTime: number): string | number;
  export function getMonth(currentTime: number): number | undefined;
  export function getFormattedMonth(currentTime: number): string | number;
  export function getDayOfTheMonth(currentTime: number): number | undefined;
  export function getFormattedDayOfTheMonth(
    currentTime: number
  ): string | number;
  export function getMonthName(currentTime: number): string;
  export function getMonthNameShort(currentTime: number): string;
  export function getJulianDate(currentTime: number): number;
  export function getDayOfTheWeek(currentTime: number): number;
  export function getDayOfTheWeekName(currentTime: number): string;
  export function getDayOfTheWeekNameShort(currentTime: number): string;
  export function getOrdinalOfNumber(number: number): string;
  export function getDayOfTheMonthOrdinal(currentTime: number): string;
  export function getFormattedSecond(currentTime: number): string | number;
  export function getFormattedMinute(currentTime: number): string | number;
  export function getRegularHour(currentTime: number): number;
  export function getHourFormatted(currentTime: number): string | number;
  export function getRegularHourFormatted(currentTime: number): string | number;
  export function getamOrpm(currentTime: number): string;
  export function getAMorPM(currentTime: number): string;
  export function getMilitaryHour(currentTime: number): string | number;
  export function isLeapYear(currentTime: number): boolean;
  export function getDaysInMonth(currentTime: number): number;
  export function getFormattedTime(format: string, currentTime: number): string;
}
