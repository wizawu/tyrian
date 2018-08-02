declare namespace java {
    namespace text {
class SimpleDateFormat extends java.text.DateFormat {
    public constructor()
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.util.Locale)
    public constructor(arg0: java.lang.String | string, arg1: java.text.DateFormatSymbols)
    public set2DigitYearStart(arg0: java.util.Date): void
    public get2DigitYearStart(): java.util.Date
    public format(arg0: java.util.Date, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
    public formatToCharacterIterator(arg0: java.lang.Object): java.text.AttributedCharacterIterator
    public parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.util.Date
    public toPattern(): string
    public toLocalizedPattern(): string
    public applyPattern(arg0: java.lang.String | string): void
    public applyLocalizedPattern(arg0: java.lang.String | string): void
    public getDateFormatSymbols(): java.text.DateFormatSymbols
    public setDateFormatSymbols(arg0: java.text.DateFormatSymbols): void
    public clone(): java.lang.Object
    public hashCode(): int
    public equals(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

    }
}