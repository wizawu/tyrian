declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        interface BufferManagerRead {
                            processFragment(arg0: java.nio.ByteBuffer, arg1: com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage): void
                            underflow(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): com.sun.corba.se.impl.encoding.ByteBufferWithInfo
                            init(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): void
                            getMarkAndResetHandler(): com.sun.corba.se.impl.encoding.MarkAndResetHandler
                            cancelProcessing(arg0: int): void
                            close(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                        }
                    }
                }
            }
        }
    }
}