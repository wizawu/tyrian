declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace utils {
                            class ObjectStack extends com.sun.org.apache.xml.internal.utils.ObjectVector {
                                public constructor()
                                public constructor(arg0: int)
                                public constructor(arg0: com.sun.org.apache.xml.internal.utils.ObjectStack)
                                public push(arg0: java.lang.Object): java.lang.Object
                                public pop(): java.lang.Object
                                public quickPop(arg0: int): void
                                public peek(): java.lang.Object
                                public peek(arg0: int): java.lang.Object
                                public setTop(arg0: java.lang.Object): void
                                public empty(): boolean
                                public search(arg0: java.lang.Object): int
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