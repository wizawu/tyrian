declare namespace sun {
    namespace text {
        namespace normalizer {
            class UTF16 {
                public static readonly CODEPOINT_MIN_VALUE: int
                public static readonly CODEPOINT_MAX_VALUE: int
                public static readonly SUPPLEMENTARY_MIN_VALUE: int
                public static readonly LEAD_SURROGATE_MIN_VALUE: int
                public static readonly TRAIL_SURROGATE_MIN_VALUE: int
                public static readonly LEAD_SURROGATE_MAX_VALUE: int
                public static readonly TRAIL_SURROGATE_MAX_VALUE: int
                public static readonly SURROGATE_MIN_VALUE: int
                public constructor()
                public static charAt(arg0: java.lang.String | string, arg1: int): int
                public static charAt(arg0: char[], arg1: int, arg2: int, arg3: int): int
                public static getCharCount(arg0: int): int
                public static isSurrogate(arg0: char): boolean
                public static isTrailSurrogate(arg0: char): boolean
                public static isLeadSurrogate(arg0: char): boolean
                public static getLeadSurrogate(arg0: int): char
                public static getTrailSurrogate(arg0: int): char
                public static valueOf(arg0: int): string
                public static append(arg0: java.lang.StringBuffer, arg1: int): java.lang.StringBuffer
                public static moveCodePointOffset(arg0: char[], arg1: int, arg2: int, arg3: int, arg4: int): int
                public static class: java.lang.Class<any>
            }
        }
    }
}