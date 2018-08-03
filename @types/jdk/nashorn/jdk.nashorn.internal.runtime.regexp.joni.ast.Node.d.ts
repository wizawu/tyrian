declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace ast {
                            abstract class Node implements jdk.nashorn.internal.runtime.regexp.joni.constants.NodeType {
                                public parent: jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public constructor()
                                public getType(): int
                                public getType2Bit(): int
                                protected setChild(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                protected getChild(): jdk.nashorn.internal.runtime.regexp.joni.ast.Node
                                public swap(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.Node): void
                                public verifyTree(arg0: java.util.Set<jdk.nashorn.internal.runtime.regexp.joni.ast.Node>, arg1: jdk.nashorn.internal.runtime.regexp.joni.WarnCallback | jdk.nashorn.internal.runtime.regexp.joni.WarnCallback$$Lambda): void
                                public getName(): string
                                protected toString(arg0: int): string
                                public getAddressName(): string
                                public toString(): string
                                protected static pad(arg0: java.lang.Object, arg1: int): string
                                public isInvalidQuantifier(): boolean
                                public isAllowedInLookBehind(): boolean
                                public isSimple(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}