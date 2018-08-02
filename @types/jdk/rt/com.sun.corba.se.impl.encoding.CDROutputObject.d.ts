declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class CDROutputObject extends com.sun.corba.se.spi.encoding.CorbaOutputObject {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.protocol.MessageMediator, arg2: com.sun.corba.se.impl.protocol.giopmsgheaders.Message, arg3: byte)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.protocol.MessageMediator, arg2: com.sun.corba.se.impl.protocol.giopmsgheaders.Message, arg3: byte, arg4: int)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg2: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg3: com.sun.corba.se.spi.transport.CorbaConnection, arg4: com.sun.corba.se.impl.protocol.giopmsgheaders.Message, arg5: byte)
                            public getMessageHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.Message
                            public finishSendingMessage(): void
                            public writeTo(arg0: com.sun.corba.se.spi.transport.CorbaConnection): void
                            public create_input_stream(): org.omg.CORBA.portable.InputStream
                            public getConnection(): com.sun.corba.se.spi.transport.CorbaConnection
                            public getByteBufferWithInfo(): com.sun.corba.se.impl.encoding.ByteBufferWithInfo
                            public setByteBufferWithInfo(arg0: com.sun.corba.se.impl.encoding.ByteBufferWithInfo): void
                            protected createCharCTBConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$CTBConverter
                            protected createWCharCTBConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$CTBConverter
                            protected dprint(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}