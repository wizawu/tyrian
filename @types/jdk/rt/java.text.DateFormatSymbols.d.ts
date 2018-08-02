declare namespace java {
    namespace text {
class DateFormatSymbols implements java.io.Serializable , java.lang.Cloneable {
    public constructor()
    public constructor(arg0: java.util.Locale)
    public static getAvailableLocales(): java.util.Locale[]
    public static getInstance(): java.text.DateFormatSymbols
    public static getInstance(arg0: java.util.Locale): java.text.DateFormatSymbols
    public getEras(): java.lang.String[]
    public setEras(arg0: java.lang.String[]): void
    public getMonths(): java.lang.String[]
    public setMonths(arg0: java.lang.String[]): void
    public getShortMonths(): java.lang.String[]
    public setShortMonths(arg0: java.lang.String[]): void
    public getWeekdays(): java.lang.String[]
    public setWeekdays(arg0: java.lang.String[]): void
    public getShortWeekdays(): java.lang.String[]
    public setShortWeekdays(arg0: java.lang.String[]): void
    public getAmPmStrings(): java.lang.String[]
    public setAmPmStrings(arg0: java.lang.String[]): void
    public getZoneStrings(): java.lang.String[][]
    public setZoneStrings(arg0: java.lang.String[][]): void
    public getLocalPatternChars(): string
    public setLocalPatternChars(arg0: java.lang.String | string): void
    public clone(): java.lang.Object
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

    }
}