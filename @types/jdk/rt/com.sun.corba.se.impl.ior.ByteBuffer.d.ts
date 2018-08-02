declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace ior {
                        class ByteBuffer {
                            protected elementData: byte[]
                            protected elementCount: int
                            protected capacityIncrement: int
                            public constructor(arg0: int, arg1: int)
                            public constructor(arg0: int)
                            public constructor()
                            public trimToSize(): void
                            public capacity(): int
                            public size(): int
                            public isEmpty(): boolean
                            public append(arg0: byte): void
                            public append(arg0: int): void
                            public append(arg0: java.lang.String | string): void
                            public toArray(): byte[]
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}