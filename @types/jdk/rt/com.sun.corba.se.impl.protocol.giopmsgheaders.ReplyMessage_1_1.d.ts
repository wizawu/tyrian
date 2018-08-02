declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
                            class ReplyMessage_1_1 extends com.sun.corba.se.impl.protocol.giopmsgheaders.Message_1_1 implements com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage {
                                public getRequestId(): int
                                public getReplyStatus(): int
                                public getAddrDisposition(): short
                                public getServiceContexts(): com.sun.corba.se.spi.servicecontext.ServiceContexts
                                public setServiceContexts(arg0: com.sun.corba.se.spi.servicecontext.ServiceContexts): void
                                public getSystemException(arg0: java.lang.String | string): org.omg.CORBA.SystemException
                                public getIOR(): com.sun.corba.se.spi.ior.IOR
                                public setIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
                                public read(arg0: org.omg.CORBA.portable.InputStream): void
                                public write(arg0: org.omg.CORBA.portable.OutputStream): void
                                public static isValidReplyStatus(arg0: int): void
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