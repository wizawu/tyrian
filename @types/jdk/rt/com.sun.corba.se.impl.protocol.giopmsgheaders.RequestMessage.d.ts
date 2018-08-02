declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
interface RequestMessage extends com.sun.corba.se.impl.protocol.giopmsgheaders.Message {
    RESPONSE_EXPECTED_BIT: byte
    getServiceContexts(): com.sun.corba.se.spi.servicecontext.ServiceContexts
    getRequestId(): int
    isResponseExpected(): boolean
    getReserved(): byte[]
    getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
    getOperation(): string
    getPrincipal(): org.omg.CORBA.Principal
    setThreadPoolToUse(arg0: int): void
}

                        }
                    }
                }
            }
        }
    }
}