declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class BoolStack implements java.lang.Cloneable {
                                public constructor()
                                public constructor(arg0: int)
                                public size(): int
                                public clear(): void
                                public push(arg0: boolean): boolean
                                public pop(): boolean
                                public popAndTop(): boolean
                                public setTop(arg0: boolean): void
                                public peek(): boolean
                                public peekOrFalse(): boolean
                                public peekOrTrue(): boolean
                                public isEmpty(): boolean
                                public clone(): java.lang.Object
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}