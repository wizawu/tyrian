declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class SuballocatedIntVector {
                                protected m_blocksize: int
                                protected m_SHIFT: int
                                protected m_MASK: int
                                protected static NUMBLOCKS_DEFAULT: int
                                protected m_numblocks: int
                                protected m_map: int[][]
                                protected m_firstFree: int
                                protected m_map0: int[]
                                protected m_buildCache: int[]
                                protected m_buildCacheStartIndex: int
                                public constructor()
                                public constructor(arg0: int, arg1: int)
                                public constructor(arg0: int)
                                public size(): int
                                public setSize(arg0: int): void
                                public addElement(arg0: int): void
                                public removeAllElements(): void
                                public setElementAt(arg0: int, arg1: int): void
                                public elementAt(arg0: int): int
                                public indexOf(arg0: int, arg1: int): int
                                public indexOf(arg0: int): int
                                public getMap0(): int[]
                                public getMap(): int[][]
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}