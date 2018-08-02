declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
class RequestMessage_1_2 extends com.sun.corba.se.impl.protocol.giopmsgheaders.Message_1_2 implements com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage {
    public getRequestId(): int
    public isResponseExpected(): boolean
    public getReserved(): byte[]
    public getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
    public getOperation(): string
    public getPrincipal(): org.omg.CORBA.Principal
    public getServiceContexts(): com.sun.corba.se.spi.servicecontext.ServiceContexts
    public read(arg0: org.omg.CORBA.portable.InputStream): void
    public write(arg0: org.omg.CORBA.portable.OutputStream): void
    public callback(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.MessageHandler): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}