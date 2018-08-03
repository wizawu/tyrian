declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace ast {
                            class EncloseNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.StateNode implements jdk.nashorn.internal.runtime.regexp.joni.constants.EncloseType {
                                public readonly type: int
                                public regNum: int
                                public option: int
                                public target: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public callAddr: int
                                public minLength: int
                                public maxLength: int
                                public charLength: int
                                public optCount: int
                                public constructor(arg0: int)
                                public constructor()
                                public constructor(arg0: int, arg1: int)
                                public getType(): int
                                protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public setTarget(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                public getName(): string
                                public toString(arg0: int): string
                                public typeToString(): string
                                public isMemory(): boolean
                                public isOption(): boolean
                                public isStopBacktrack(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}