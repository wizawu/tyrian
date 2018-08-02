declare namespace java {
    namespace text {
        abstract class NumberFormat extends java.text.Format {
            public static INTEGER_FIELD: int
            public static FRACTION_FIELD: int
            protected constructor()
            public format(arg0: java.lang.Object, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
            public parseObject(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Object
            public format(arg0: double): string
            public format(arg0: long): string
            public format(arg0: double, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
            public format(arg0: long, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
            public parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Number
            public parse(arg0: java.lang.String | string): java.lang.Number
            public isParseIntegerOnly(): boolean
            public setParseIntegerOnly(arg0: boolean): void
            public static getInstance(): java.text.NumberFormat
            public static getInstance(arg0: java.util.Locale): java.text.NumberFormat
            public static getNumberInstance(): java.text.NumberFormat
            public static getNumberInstance(arg0: java.util.Locale): java.text.NumberFormat
            public static getIntegerInstance(): java.text.NumberFormat
            public static getIntegerInstance(arg0: java.util.Locale): java.text.NumberFormat
            public static getCurrencyInstance(): java.text.NumberFormat
            public static getCurrencyInstance(arg0: java.util.Locale): java.text.NumberFormat
            public static getPercentInstance(): java.text.NumberFormat
            public static getPercentInstance(arg0: java.util.Locale): java.text.NumberFormat
            public static getAvailableLocales(): java.util.Locale[]
            public hashCode(): int
            public equals(arg0: java.lang.Object): boolean
            public clone(): java.lang.Object
            public isGroupingUsed(): boolean
            public setGroupingUsed(arg0: boolean): void
            public getMaximumIntegerDigits(): int
            public setMaximumIntegerDigits(arg0: int): void
            public getMinimumIntegerDigits(): int
            public setMinimumIntegerDigits(arg0: int): void
            public getMaximumFractionDigits(): int
            public setMaximumFractionDigits(arg0: int): void
            public getMinimumFractionDigits(): int
            public setMinimumFractionDigits(arg0: int): void
            public getCurrency(): java.util.Currency
            public setCurrency(arg0: java.util.Currency): void
            public getRoundingMode(): java.math.RoundingMode
            public setRoundingMode(arg0: java.math.RoundingMode): void
            public static class: java.lang.Class<any>
        }
    }
}