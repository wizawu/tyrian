declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class StringVector implements java.io.Serializable {
                                protected m_blocksize: int
                                protected m_map: java.lang.String[]
                                protected m_firstFree: int
                                protected m_mapSize: int
                                public constructor()
                                public constructor(arg0: int)
                                public getLength(): int
                                public size(): int
                                public addElement(arg0: java.lang.String | string): void
                                public elementAt(arg0: int): string
                                public contains(arg0: java.lang.String | string): boolean
                                public containsIgnoreCase(arg0: java.lang.String | string): boolean
                                public push(arg0: java.lang.String | string): void
                                public pop(): string
                                public peek(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}