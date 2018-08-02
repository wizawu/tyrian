declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
                            interface FragmentMessage extends com.sun.corba.se.impl.protocol.giopmsgheaders.Message {
                                getRequestId(): int
                                getHeaderLength(): int
                            }
                        }
                    }
                }
            }
        }
    }
}