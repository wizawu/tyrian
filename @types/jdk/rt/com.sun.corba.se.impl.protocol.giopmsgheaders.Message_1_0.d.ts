declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
                            class Message_1_0 extends com.sun.corba.se.impl.protocol.giopmsgheaders.MessageBase {
                                public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                                public getType(): int
                                public getSize(): int
                                public isLittleEndian(): boolean
                                public moreFragmentsToFollow(): boolean
                                public setSize(arg0: java.nio.ByteBuffer, arg1: int): void
                                public createFragmentMessage(): com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage
                                public read(arg0: org.omg.CORBA.portable.InputStream): void
                                public write(arg0: org.omg.CORBA.portable.OutputStream): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}