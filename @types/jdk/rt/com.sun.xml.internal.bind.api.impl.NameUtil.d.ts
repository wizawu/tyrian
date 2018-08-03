declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace api {
                        namespace impl {
                            class NameUtil {
                                protected static readonly UPPER_LETTER: int
                                protected static readonly LOWER_LETTER: int
                                protected static readonly OTHER_LETTER: int
                                protected static readonly DIGIT: int
                                protected static readonly OTHER: int
                                protected isPunct(arg0: char): boolean
                                protected static isDigit(arg0: char): boolean
                                protected static isUpper(arg0: char): boolean
                                protected static isLower(arg0: char): boolean
                                protected isLetter(arg0: char): boolean
                                public capitalize(arg0: java.lang.String | string): string
                                protected classify(arg0: char): int
                                public toWordList(arg0: java.lang.String | string): java.util.List<java.lang.String>
                                protected toMixedCaseName(arg0: java.util.List<java.lang.String>, arg1: boolean): string
                                protected toMixedCaseVariableName(arg0: java.lang.String[], arg1: boolean, arg2: boolean): string
                                public toConstantName(arg0: java.lang.String | string): string
                                public toConstantName(arg0: java.util.List<java.lang.String>): string
                                public static escape(arg0: java.lang.StringBuilder, arg1: java.lang.String | string, arg2: int): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}