declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        class EncodingHelper {
                            public constructor()
                            public static digitVal(arg0: int): int
                            public static odigitVal(arg0: int): int
                            public static isXDigit(arg0: int): boolean
                            public static xdigitVal(arg0: int): int
                            public static isDigit(arg0: int): boolean
                            public static isWord(arg0: int): boolean
                            public static isNewLine(arg0: int): boolean
                            public static isNewLine(arg0: char[], arg1: int, arg2: int): boolean
                            public static prevCharHead(arg0: int, arg1: int): int
                            public static rightAdjustCharHeadWithPrev(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder): int
                            public static stepBack(arg0: int, arg1: int, arg2: int): int
                            public static mbcodeStartPosition(): int
                            public static caseFoldCodesByString(arg0: int, arg1: char): char[]
                            public static applyAllCaseFold(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.ApplyCaseFold, arg2: java.lang.Object): void
                            public static toLowerCase(arg0: char): char
                            public static toLowerCase(arg0: int): int
                            public static toUpperCase(arg0: char): char
                            public static toUpperCase(arg0: int): int
                            public static ctypeCodeRange(arg0: int, arg1: jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder): int[]
                            public static isInCodeRange(arg0: int[], arg1: int, arg2: int): boolean
                            public static isCodeCType(arg0: int, arg1: int): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}