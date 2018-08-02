declare namespace java {
    namespace text {
class MessageFormat extends java.text.Format {
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.util.Locale)
    public setLocale(arg0: java.util.Locale): void
    public getLocale(): java.util.Locale
    public applyPattern(arg0: java.lang.String | string): void
    public toPattern(): string
    public setFormatsByArgumentIndex(arg0: java.text.Format[]): void
    public setFormats(arg0: java.text.Format[]): void
    public setFormatByArgumentIndex(arg0: int, arg1: java.text.Format): void
    public setFormat(arg0: int, arg1: java.text.Format): void
    public getFormatsByArgumentIndex(): java.text.Format[]
    public getFormats(): java.text.Format[]
    public format(arg0: java.lang.Object[], arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
    public static format(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): string
    public format(arg0: java.lang.Object, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
    public formatToCharacterIterator(arg0: java.lang.Object): java.text.AttributedCharacterIterator
    public parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Object[]
    public parse(arg0: java.lang.String | string): java.lang.Object[]
    public parseObject(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Object
    public clone(): java.lang.Object
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public static class: java.lang.Class<any>
}

    }
}