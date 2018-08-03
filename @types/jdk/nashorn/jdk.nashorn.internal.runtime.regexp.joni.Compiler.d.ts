declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        abstract class Compiler implements jdk.nashorn.internal.runtime.regexp.joni.exception.ErrorMessages {
                            protected readonly analyser: jdk.nashorn.internal.runtime.regexp.joni.Analyser
                            protected readonly regex: jdk.nashorn.internal.runtime.regexp.joni.Regex
                            protected constructor(arg0: jdk.nashorn.internal.runtime.regexp.joni.Analyser)
                            protected abstract prepare(): void
                            protected abstract finish(): void
                            protected abstract compileAltNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.ConsAltNode): void
                            protected abstract addCompileString(arg0: char[], arg1: int, arg2: int, arg3: boolean): void
                            protected abstract compileCClassNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode): void
                            protected abstract compileAnyCharNode(): void
                            protected abstract compileBackrefNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.BackRefNode): void
                            protected abstract compileNonCECQuantifierNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.QuantifierNode): void
                            protected abstract compileOptionNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.EncloseNode): void
                            protected abstract compileEncloseNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.EncloseNode): void
                            protected abstract compileAnchorNode(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.AnchorNode): void
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