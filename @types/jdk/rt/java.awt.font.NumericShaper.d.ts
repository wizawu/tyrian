declare namespace java {
    namespace awt {
        namespace font {
            class NumericShaper implements java.io.Serializable {
                public static EUROPEAN: int
                public static ARABIC: int
                public static EASTERN_ARABIC: int
                public static DEVANAGARI: int
                public static BENGALI: int
                public static GURMUKHI: int
                public static GUJARATI: int
                public static ORIYA: int
                public static TAMIL: int
                public static TELUGU: int
                public static KANNADA: int
                public static MALAYALAM: int
                public static THAI: int
                public static LAO: int
                public static TIBETAN: int
                public static MYANMAR: int
                public static ETHIOPIC: int
                public static KHMER: int
                public static MONGOLIAN: int
                public static ALL_RANGES: int
                public static getShaper(arg0: int): java.awt.font.NumericShaper
                public static getShaper(arg0: java.awt.font.NumericShaper$Range): java.awt.font.NumericShaper
                public static getContextualShaper(arg0: int): java.awt.font.NumericShaper
                public static getContextualShaper(arg0: java.util.Set<java.awt.font.NumericShaper$Range>): java.awt.font.NumericShaper
                public static getContextualShaper(arg0: int, arg1: int): java.awt.font.NumericShaper
                public static getContextualShaper(arg0: java.util.Set<java.awt.font.NumericShaper$Range>, arg1: java.awt.font.NumericShaper$Range): java.awt.font.NumericShaper
                public shape(arg0: char[], arg1: int, arg2: int): void
                public shape(arg0: char[], arg1: int, arg2: int, arg3: int): void
                public shape(arg0: char[], arg1: int, arg2: int, arg3: java.awt.font.NumericShaper$Range): void
                public isContextual(): boolean
                public getRanges(): int
                public getRangeSet(): java.util.Set<java.awt.font.NumericShaper$Range>
                public hashCode(): int
                public equals(arg0: java.lang.Object): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}