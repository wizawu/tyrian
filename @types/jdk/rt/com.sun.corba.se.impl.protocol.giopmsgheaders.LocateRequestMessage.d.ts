declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
                            interface LocateRequestMessage extends com.sun.corba.se.impl.protocol.giopmsgheaders.Message {
                                getRequestId(): int
                                getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
                            }
                        }
                    }
                }
            }
        }
    }
}