declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        class Lexer extends jdk.nashorn.internal.runtime.regexp.joni.ScannerSupport {
                            protected env: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment
                            protected syntax: jdk.nashorn.internal.runtime.regexp.joni.Syntax
                            protected token: jdk.nashorn.internal.runtime.regexp.joni.Token
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg1: char[], arg2: int, arg3: int)
                            protected fetchTokenInCC(): jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                            protected fetchToken(): jdk.nashorn.internal.runtime.regexp.joni.constants.TokenType
                            protected syntaxWarn(arg0: java.lang.String | string, arg1: char): void
                            protected syntaxWarn(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}