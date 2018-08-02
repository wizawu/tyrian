declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
class BufferManagerReadGrow implements com.sun.corba.se.impl.encoding.BufferManagerRead , com.sun.corba.se.impl.encoding.MarkAndResetHandler {
    public processFragment(arg0: java.nio.ByteBuffer, arg1: com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage): void
    public init(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): void
    public underflow(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): com.sun.corba.se.impl.encoding.ByteBufferWithInfo
    public cancelProcessing(arg0: int): void
    public getMarkAndResetHandler(): com.sun.corba.se.impl.encoding.MarkAndResetHandler
    public mark(arg0: com.sun.corba.se.impl.encoding.RestorableInputStream): void
    public fragmentationOccured(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
    public reset(): void
    public close(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}