declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class SymbolHash {
                                protected static TABLE_SIZE: int
                                protected static MAX_HASH_COLLISIONS: int
                                protected static MULTIPLIERS_SIZE: int
                                protected static MULTIPLIERS_MASK: int
                                protected fTableSize: int
                                protected fBuckets: com.sun.org.apache.xerces.internal.util.SymbolHash$Entry[]
                                protected fNum: int
                                protected fHashMultipliers: int[]
                                public constructor()
                                public constructor(arg0: int)
                                public put(arg0: java.lang.Object, arg1: java.lang.Object): void
                                public get(arg0: java.lang.Object): java.lang.Object
                                public getLength(): int
                                public getValues(arg0: java.lang.Object[], arg1: int): int
                                public getEntries(): java.lang.Object[]
                                public makeClone(): com.sun.org.apache.xerces.internal.util.SymbolHash
                                public clear(): void
                                protected search(arg0: java.lang.Object, arg1: int): com.sun.org.apache.xerces.internal.util.SymbolHash$Entry
                                protected hash(arg0: java.lang.Object): int
                                protected rehash(): void
                                protected rebalance(): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}