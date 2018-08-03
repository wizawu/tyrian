declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class SymbolTable {
                                protected static readonly TABLE_SIZE: int
                                protected static readonly MAX_HASH_COLLISIONS: int
                                protected static readonly MULTIPLIERS_SIZE: int
                                protected static readonly MULTIPLIERS_MASK: int
                                protected fBuckets: com.sun.org.apache.xerces.internal.util.SymbolTable$Entry[]
                                protected fTableSize: int
                                protected fCount: int
                                protected fThreshold: int
                                protected fLoadFactor: float
                                protected readonly fCollisionThreshold: int
                                protected fHashMultipliers: int[]
                                public constructor(arg0: int, arg1: float)
                                public constructor(arg0: int)
                                public constructor()
                                public addSymbol(arg0: java.lang.String | string): string
                                public addSymbol(arg0: char[], arg1: int, arg2: int): string
                                public hash(arg0: java.lang.String | string): int
                                public hash(arg0: char[], arg1: int, arg2: int): int
                                protected rehash(): void
                                protected rebalance(): void
                                public containsSymbol(arg0: java.lang.String | string): boolean
                                public containsSymbol(arg0: char[], arg1: int, arg2: int): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}