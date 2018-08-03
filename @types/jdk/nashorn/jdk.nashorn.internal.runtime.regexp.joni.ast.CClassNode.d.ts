declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        namespace ast {
                            class CClassNode extends jdk.nashorn.internal.runtime.regexp.joni.ast.Node {
                                public readonly bs: jdk.nashorn.internal.runtime.regexp.joni.BitSet
                                public mbuf: jdk.nashorn.internal.runtime.regexp.joni.CodeRangeBuffer
                                public constructor()
                                public clear(): void
                                public getType(): int
                                public getName(): string
                                public equals(arg0: java.lang.Object): boolean
                                public hashCode(): int
                                public toString(arg0: int): string
                                public flagsToString(): string
                                public isEmpty(): boolean
                                public addCodeRangeToBuf(arg0: int, arg1: int): void
                                public addCodeRange(arg0: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg1: int, arg2: int): void
                                public addAllMultiByteRange(): void
                                public clearNotFlag(): void
                                public and(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode): void
                                public or(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode): void
                                public addCTypeByRange(arg0: int, arg1: boolean, arg2: int, arg3: int[]): void
                                public addCType(arg0: int, arg1: boolean, arg2: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment, arg3: jdk.nashorn.internal.runtime.regexp.joni.encoding.IntHolder): void
                                public nextStateClass(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode$CCStateArg, arg1: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment): void
                                public nextStateValue(arg0: jdk.nashorn.internal.runtime.regexp.joni.ast.CClassNode$CCStateArg, arg1: jdk.nashorn.internal.runtime.regexp.joni.ScanEnvironment): void
                                public isCodeInCCLength(arg0: int): boolean
                                public isCodeInCC(arg0: int): boolean
                                public setNot(): void
                                public clearNot(): void
                                public isNot(): boolean
                                public setShare(): void
                                public clearShare(): void
                                public isShare(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}