declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class ByteBufferWithInfo {
                            public byteBuffer: java.nio.ByteBuffer
                            public buflen: int
                            public needed: int
                            public fragmented: boolean
                            public constructor(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer, arg2: int)
                            public constructor(arg0: org.omg.CORBA.ORB, arg1: java.nio.ByteBuffer)
                            public constructor(arg0: org.omg.CORBA.ORB, arg1: com.sun.corba.se.impl.encoding.BufferManagerWrite)
                            public constructor(arg0: org.omg.CORBA.ORB, arg1: com.sun.corba.se.impl.encoding.BufferManagerWrite, arg2: boolean)
                            public constructor(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo)
                            public getSize(): int
                            public getLength(): int
                            public position(): int
                            public position(arg0: int): void
                            public setLength(arg0: int): void
                            public growBuffer(arg0: com.sun.corba.se.spi.orb.ORB): void
                            public toString(): string
                            protected dprint(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}