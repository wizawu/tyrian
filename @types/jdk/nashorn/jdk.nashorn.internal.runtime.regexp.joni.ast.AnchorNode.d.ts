declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace ast {
                            class AnchorNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node implements jdk.nashorn.internal.runtime.regexp.joni.constants.AnchorType {
                                public type: int
                                public target: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public charLength: int
                                public constructor(arg0: int)
                                public getType(): int
                                protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public setTarget(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                public getName(): string
                                public toString(arg0: int): string
                                public typeToString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}