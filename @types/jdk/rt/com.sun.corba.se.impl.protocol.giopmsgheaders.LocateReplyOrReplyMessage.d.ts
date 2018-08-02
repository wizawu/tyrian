declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
interface LocateReplyOrReplyMessage extends com.sun.corba.se.impl.protocol.giopmsgheaders.Message {
    getRequestId(): int
    getReplyStatus(): int
    getSystemException(arg0: java.lang.String | string): org.omg.CORBA.SystemException
    getIOR(): com.sun.corba.se.spi.ior.IOR
    getAddrDisposition(): short
}

                        }
                    }
                }
            }
        }
    }
}