declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
                        namespace giopmsgheaders {
                            abstract class MessageBase implements com.sun.corba.se.impl.protocol.giopmsgheaders.Message {
                                public giopHeader: byte[]
                                public constructor()
                                public static typeToString(arg0: int): string
                                public static typeToString(arg0: byte): string
                                public static readGIOPMessage(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaConnection): com.sun.corba.se.impl.protocol.giopmsgheaders.MessageBase
                                public static readGIOPHeader(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaConnection): com.sun.corba.se.impl.protocol.giopmsgheaders.MessageBase
                                public static readGIOPBody(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaConnection, arg2: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): com.sun.corba.se.impl.protocol.giopmsgheaders.Message
                                public static createRequest(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: byte, arg3: int, arg4: boolean, arg5: com.sun.corba.se.spi.ior.IOR, arg6: short, arg7: java.lang.String | string, arg8: com.sun.corba.se.spi.servicecontext.ServiceContexts, arg9: org.omg.CORBA.Principal): com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage
                                public static createReply(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: byte, arg3: int, arg4: int, arg5: com.sun.corba.se.spi.servicecontext.ServiceContexts, arg6: com.sun.corba.se.spi.ior.IOR): com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage
                                public static createLocateRequest(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: byte, arg3: int, arg4: byte[]): com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage
                                public static createLocateReply(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg2: byte, arg3: int, arg4: int, arg5: com.sun.corba.se.spi.ior.IOR): com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage
                                public static createCancelRequest(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg1: int): com.sun.corba.se.impl.protocol.giopmsgheaders.CancelRequestMessage
                                public static createCloseConnection(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.protocol.giopmsgheaders.Message
                                public static createMessageError(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.protocol.giopmsgheaders.Message
                                public static createFragmentMessage(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage
                                public static getRequestId(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): int
                                public static setFlag(arg0: java.nio.ByteBuffer, arg1: int): void
                                public static clearFlag(arg0: byte[], arg1: int): void
                                public callback(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.MessageHandler): void
                                public getByteBuffer(): java.nio.ByteBuffer
                                public setByteBuffer(arg0: java.nio.ByteBuffer): void
                                public getThreadPoolToUse(): int
                                public getEncodingVersion(): byte
                                public setEncodingVersion(arg0: byte): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}