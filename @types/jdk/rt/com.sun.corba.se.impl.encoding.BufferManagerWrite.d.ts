declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
abstract class BufferManagerWrite {
    protected orb: com.sun.corba.se.spi.orb.ORB
    protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
    protected outputObject: java.lang.Object
    protected sentFullMessage: boolean
    public sentFragment(): boolean
    public sentFullMessage(): boolean
    public getBufferSize(): int
    public overflow(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
    public sendMessage(): void
    public setOutputObject(arg0: java.lang.Object): void
    public close(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}