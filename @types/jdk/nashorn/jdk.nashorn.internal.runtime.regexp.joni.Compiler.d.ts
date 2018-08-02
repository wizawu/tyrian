declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        abstract class Compiler implements jdk.nashorn.internal.runtime.regexp.joni.exception.ErrorMessages {
                            protected analyser: jdk.nashorn.internal.runtime.regexp.joni.Analyser
                            protected regex: jdk.nashorn.internal.runtime.regexp.joni.Regex
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Analyser)
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
                            protected compileTree(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                            protected compileTreeNTimes(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node, arg1: int): void
                            protected newSyntaxException(arg0: java.lang.String | string): void
                            protected newInternalException(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}