declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class BufferQueue {
                            public constructor()
                            public enqueue(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            public dequeue(): com.sun.corba.se.impl.encoding.ByteBufferWithInfo
                            public size(): int
                            public push(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}