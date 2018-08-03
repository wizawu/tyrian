declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        class Parser extends jdk.nashorn.internal.runtime.regexp.joni.Lexer {
                            protected readonly regex: jdk.nashorn.internal.runtime.regexp.joni.Regex
                            protected root: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                            protected returnCode: int
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg1: char[], arg2: int, arg3: int)
                            protected parse(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}