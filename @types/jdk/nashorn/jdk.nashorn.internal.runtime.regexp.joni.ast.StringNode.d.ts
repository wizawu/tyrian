declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace ast {
                            class StringNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node implements jdk.nashorn.internal.runtime.regexp.joni.constants.StringType {
                                public static readonly EMPTY: jdk.nashorn.internal.runtime.regexp.joni.ast.StringNode
                                public chars: char[]
                                public p: int
                                public end: int
                                public flag: int
                                public constructor()
                                public constructor(arg0: char[], arg1: int, arg2: int)
                                public constructor(arg0: char)
                                public ensure(arg0: int): void
                                public getType(): int
                                public getName(): string
                                public toString(arg0: int): string
                                public length(): int
                                public splitLastChar(): jdk.nashorn.internal.runtime.regexp.joni.ast.StringNode
                                public canBeSplit(): boolean
                                public set(arg0: char[], arg1: int, arg2: int): void
                                public cat(arg0: char[], arg1: int, arg2: int): void
                                public cat(arg0: char): void
                                public catCode(arg0: int): void
                                public clear(): void
                                public setRaw(): void
                                public clearRaw(): void
                                public isRaw(): boolean
                                public setAmbig(): void
                                public clearAmbig(): void
                                public isAmbig(): boolean
                                public setDontGetOptInfo(): void
                                public clearDontGetOptInfo(): void
                                public isDontGetOptInfo(): boolean
                                public setShared(): void
                                public clearShared(): void
                                public isShared(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}