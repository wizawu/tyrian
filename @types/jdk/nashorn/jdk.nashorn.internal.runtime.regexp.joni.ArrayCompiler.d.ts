declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        class ArrayCompiler extends jdk.nashorn.internal.runtime.regexp.joni.Compiler {
                            protected prepare(): void
                            protected finish(): void
                            protected compileAltNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): void
                            protected addCompileString(arg0: char[], arg1: int, arg2: int, arg3: boolean): void
                            protected compileCClassNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode): void
                            protected compileAnyCharNode(): void
                            protected compileBackrefNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.BackRefNode): void
                            protected compileNonCECQuantifierNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode): void
                            protected compileOptionNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.EncloseNode): void
                            protected compileEncloseNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.EncloseNode): void
                            protected compileAnchorNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.AnchorNode): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}