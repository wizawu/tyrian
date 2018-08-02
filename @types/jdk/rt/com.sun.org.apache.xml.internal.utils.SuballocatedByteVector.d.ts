declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class SuballocatedByteVector {
                                protected m_blocksize: int
                                protected m_numblocks: int
                                protected m_map: byte[][]
                                protected m_firstFree: int
                                protected m_map0: byte[]
                                public constructor()
                                public constructor(arg0: int)
                                public constructor(arg0: int, arg1: int)
                                public size(): int
                                public addElement(arg0: byte): void
                                public removeAllElements(): void
                                public setElementAt(arg0: byte, arg1: int): void
                                public elementAt(arg0: int): byte
                                public indexOf(arg0: byte, arg1: int): int
                                public indexOf(arg0: byte): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}