declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class BufferManagerReadStream implements com.sun.corba.se.impl.encoding.BufferManagerRead , com.sun.corba.se.impl.encoding.MarkAndResetHandler {
                            public cancelProcessing(arg0: int): void
                            public processFragment(arg0: java.nio.ByteBuffer, arg1: com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage): void
                            public underflow(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): com.sun.corba.se.impl.encoding.ByteBufferWithInfo
                            public init(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): void
                            public close(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            protected getByteBufferPool(): com.sun.corba.se.pept.transport.ByteBufferPool
                            public mark(arg0: com.sun.corba.se.impl.encoding.RestorableInputStream): void
                            public fragmentationOccured(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            public reset(): void
                            public getMarkAndResetHandler(): com.sun.corba.se.impl.encoding.MarkAndResetHandler
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}