declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace regexp {
                    namespace internal {
                        class RE implements java.io.Serializable {
                            public static readonly MATCH_NORMAL: int
                            public static readonly MATCH_CASEINDEPENDENT: int
                            public static readonly MATCH_MULTILINE: int
                            public static readonly MATCH_SINGLELINE: int
                            public static readonly REPLACE_ALL: int
                            public static readonly REPLACE_FIRSTONLY: int
                            public static readonly REPLACE_BACKREFERENCES: int
                            public constructor(arg0: java.lang.String | string)
                            public constructor(arg0: java.lang.String | string, arg1: int)
                            public constructor(arg0: com.sun.org.apache.regexp.internal.REProgram, arg1: int)
                            public constructor(arg0: com.sun.org.apache.regexp.internal.REProgram)
                            public constructor()
                            public static simplePatternToFullRegularExpression(arg0: java.lang.String | string): string
                            public setMatchFlags(arg0: int): void
                            public getMatchFlags(): int
                            public setProgram(arg0: com.sun.org.apache.regexp.internal.REProgram): void
                            public getProgram(): com.sun.org.apache.regexp.internal.REProgram
                            public getParenCount(): int
                            public getParen(arg0: int): string
                            public getParenStart(arg0: int): int
                            public getParenEnd(arg0: int): int
                            public getParenLength(arg0: int): int
                            protected setParenStart(arg0: int, arg1: int): void
                            protected setParenEnd(arg0: int, arg1: int): void
                            protected internalError(arg0: java.lang.String | string): void
                            protected matchNodes(arg0: int, arg1: int, arg2: int): int
                            protected matchAt(arg0: int): boolean
                            public match(arg0: java.lang.String | string, arg1: int): boolean
                            public match(arg0: com.sun.org.apache.regexp.internal.CharacterIterator, arg1: int): boolean
                            public match(arg0: java.lang.String | string): boolean
                            public split(arg0: java.lang.String | string): java.lang.String[]
                            public subst(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                            public subst(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int): string
                            public grep(arg0: java.lang.Object[]): java.lang.String[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}