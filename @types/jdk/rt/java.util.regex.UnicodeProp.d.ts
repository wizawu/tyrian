declare namespace java {
    namespace util {
        namespace regex {
            abstract class UnicodeProp extends java.lang.Enum<java.util.regex.UnicodeProp> {
                public static readonly ALPHABETIC: java.util.regex.UnicodeProp
                public static readonly LETTER: java.util.regex.UnicodeProp
                public static readonly IDEOGRAPHIC: java.util.regex.UnicodeProp
                public static readonly LOWERCASE: java.util.regex.UnicodeProp
                public static readonly UPPERCASE: java.util.regex.UnicodeProp
                public static readonly TITLECASE: java.util.regex.UnicodeProp
                public static readonly WHITE_SPACE: java.util.regex.UnicodeProp
                public static readonly CONTROL: java.util.regex.UnicodeProp
                public static readonly PUNCTUATION: java.util.regex.UnicodeProp
                public static readonly HEX_DIGIT: java.util.regex.UnicodeProp
                public static readonly ASSIGNED: java.util.regex.UnicodeProp
                public static readonly NONCHARACTER_CODE_POINT: java.util.regex.UnicodeProp
                public static readonly DIGIT: java.util.regex.UnicodeProp
                public static readonly ALNUM: java.util.regex.UnicodeProp
                public static readonly BLANK: java.util.regex.UnicodeProp
                public static readonly GRAPH: java.util.regex.UnicodeProp
                public static readonly PRINT: java.util.regex.UnicodeProp
                public static readonly WORD: java.util.regex.UnicodeProp
                public static readonly JOIN_CONTROL: java.util.regex.UnicodeProp
                public static values(): java.util.regex.UnicodeProp[]
                public static valueOf(arg0: java.lang.String | string): java.util.regex.UnicodeProp
                public static forName(arg0: java.lang.String | string): java.util.regex.UnicodeProp
                public static forPOSIXName(arg0: java.lang.String | string): java.util.regex.UnicodeProp
                public abstract is(arg0: int): boolean
                public static class: java.lang.Class<any>
            }
            interface UnicodeProp$$Lambda extends java.lang.Enum<java.util.regex.UnicodeProp> {
                (arg0: int): boolean
            }
        }
    }
}