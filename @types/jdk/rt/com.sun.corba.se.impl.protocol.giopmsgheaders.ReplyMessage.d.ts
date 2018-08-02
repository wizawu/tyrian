declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
interface ReplyMessage extends com.sun.corba.se.impl.protocol.giopmsgheaders.Message , com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyOrReplyMessage {
    NO_EXCEPTION: int
    USER_EXCEPTION: int
    SYSTEM_EXCEPTION: int
    LOCATION_FORWARD: int
    LOCATION_FORWARD_PERM: int
    NEEDS_ADDRESSING_MODE: int
    getServiceContexts(): com.sun.corba.se.spi.servicecontext.ServiceContexts
    setServiceContexts(arg0: com.sun.corba.se.spi.servicecontext.ServiceContexts): void
    setIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
}

                        }
                    }
                }
            }
        }
    }
}