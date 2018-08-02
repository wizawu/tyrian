declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace protocol {
interface CorbaMessageMediator extends com.sun.corba.se.pept.protocol.MessageMediator , org.omg.CORBA.portable.ResponseHandler {
    setReplyHeader(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyOrReplyMessage): void
    getLocateReplyHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage
    getReplyHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage
    setReplyExceptionDetailMessage(arg0: java.lang.String | string): void
    getRequestHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage
    getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
    getEncodingVersion(): byte
    getRequestId(): int
    getRequestIdInteger(): java.lang.Integer
    isOneWay(): boolean
    getAddrDisposition(): short
    getOperationName(): string
    getRequestServiceContexts(): com.sun.corba.se.spi.servicecontext.ServiceContexts
    getReplyServiceContexts(): com.sun.corba.se.spi.servicecontext.ServiceContexts
    getDispatchHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.Message
    setDispatchHeader(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): void
    getDispatchBuffer(): java.nio.ByteBuffer
    setDispatchBuffer(arg0: java.nio.ByteBuffer): void
    getThreadPoolToUse(): int
    getStreamFormatVersion(): byte
    getStreamFormatVersionForReply(): byte
    sendCancelRequestIfFinalFragmentNotSent(): void
    setDIIInfo(arg0: org.omg.CORBA.Request): void
    isDIIRequest(): boolean
    unmarshalDIIUserException(arg0: java.lang.String | string, arg1: org.omg.CORBA_2_3.portable.InputStream): java.lang.Exception
    setDIIException(arg0: java.lang.Exception): void
    handleDIIReply(arg0: org.omg.CORBA_2_3.portable.InputStream): void
    isSystemExceptionReply(): boolean
    isUserExceptionReply(): boolean
    isLocationForwardReply(): boolean
    isDifferentAddrDispositionRequestedReply(): boolean
    getAddrDispositionReply(): short
    getForwardedIOR(): com.sun.corba.se.spi.ior.IOR
    getSystemExceptionReply(): org.omg.CORBA.SystemException
    getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
    setProtocolHandler(arg0: com.sun.corba.se.spi.protocol.CorbaProtocolHandler): void
    getProtocolHandler(): com.sun.corba.se.spi.protocol.CorbaProtocolHandler
    createReply(): org.omg.CORBA.portable.OutputStream
    createExceptionReply(): org.omg.CORBA.portable.OutputStream
    executeReturnServantInResponseConstructor(): boolean
    setExecuteReturnServantInResponseConstructor(arg0: boolean): void
    executeRemoveThreadInfoInResponseConstructor(): boolean
    setExecuteRemoveThreadInfoInResponseConstructor(arg0: boolean): void
    executePIInResponseConstructor(): boolean
    setExecutePIInResponseConstructor(arg0: boolean): void
}

                    }
                }
            }
        }
    }
}