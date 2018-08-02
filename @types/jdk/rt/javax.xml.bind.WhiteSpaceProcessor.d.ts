declare namespace javax {
    namespace xml {
        namespace bind {
            abstract class WhiteSpaceProcessor {
                public static replace(arg0: java.lang.String | string): string
                public static replace(arg0: java.lang.CharSequence): java.lang.CharSequence
                public static trim(arg0: java.lang.CharSequence): java.lang.CharSequence
                public static collapse(arg0: java.lang.String | string): string
                public static collapse(arg0: java.lang.CharSequence): java.lang.CharSequence
                public static isWhiteSpace(arg0: java.lang.CharSequence): boolean
                public static isWhiteSpace(arg0: char): boolean
                protected static isWhiteSpaceExceptSpace(arg0: char): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}