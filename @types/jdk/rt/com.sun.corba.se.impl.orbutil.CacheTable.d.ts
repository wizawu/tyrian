declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orbutil {
                        class CacheTable {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: boolean)
                            public put(arg0: java.lang.Object, arg1: int): void
                            public containsKey(arg0: java.lang.Object): boolean
                            public getVal(arg0: java.lang.Object): int
                            public containsVal(arg0: int): boolean
                            public containsOrderedVal(arg0: int): boolean
                            public getKey(arg0: int): java.lang.Object
                            public done(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}