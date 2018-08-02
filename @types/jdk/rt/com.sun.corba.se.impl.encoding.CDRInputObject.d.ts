declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace encoding {
                        class CDRInputObject extends com.sun.corba.se.impl.encoding.CDRInputStream implements com.sun.corba.se.pept.encoding.InputObject {
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaConnection, arg2: java.nio.ByteBuffer, arg3: com.sun.corba.se.impl.protocol.giopmsgheaders.Message)
                            public getConnection(): com.sun.corba.se.spi.transport.CorbaConnection
                            public getMessageHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.Message
                            public unmarshalHeader(): void
                            public unmarshaledHeader(): boolean
                            protected createCharBTCConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$BTCConverter
                            protected createWCharBTCConverter(): com.sun.corba.se.impl.encoding.CodeSetConversion$BTCConverter
                            public getCodeBase(): com.sun.org.omg.SendingContext.CodeBase
                            public dup(): com.sun.corba.se.impl.encoding.CDRInputStream
                            protected dprint(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}