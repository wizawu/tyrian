declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace protocol {
class CorbaMessageMediatorImpl implements com.sun.corba.se.spi.protocol.CorbaMessageMediator , com.sun.corba.se.spi.protocol.CorbaProtocolHandler , com.sun.corba.se.impl.protocol.giopmsgheaders.MessageHandler {
    protected orb: com.sun.corba.se.spi.orb.ORB
    protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
    protected interceptorWrapper: com.sun.corba.se.impl.logging.InterceptorsSystemException
    protected contactInfo: com.sun.corba.se.spi.transport.CorbaContactInfo
    protected connection: com.sun.corba.se.spi.transport.CorbaConnection
    protected addrDisposition: short
    protected outputObject: com.sun.corba.se.impl.encoding.CDROutputObject
    protected inputObject: com.sun.corba.se.impl.encoding.CDRInputObject
    protected messageHeader: com.sun.corba.se.impl.protocol.giopmsgheaders.Message
    protected requestHeader: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage
    protected replyHeader: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyOrReplyMessage
    protected replyExceptionDetailMessage: string
    protected replyIOR: com.sun.corba.se.spi.ior.IOR
    protected requestIdInteger: java.lang.Integer
    protected dispatchHeader: com.sun.corba.se.impl.protocol.giopmsgheaders.Message
    protected dispatchByteBuffer: java.nio.ByteBuffer
    protected streamFormatVersion: byte
    protected streamFormatVersionSet: boolean
    protected diiRequest: org.omg.CORBA.Request
    protected cancelRequestAlreadySent: boolean
    protected protocolHandler: com.sun.corba.se.pept.protocol.ProtocolHandler
    protected _executeReturnServantInResponseConstructor: boolean
    protected _executeRemoveThreadInfoInResponseConstructor: boolean
    protected _executePIInResponseConstructor: boolean
    protected isThreadDone: boolean
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.transport.ContactInfo, arg2: com.sun.corba.se.pept.transport.Connection, arg3: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg4: com.sun.corba.se.spi.ior.IOR, arg5: int, arg6: short, arg7: java.lang.String | string, arg8: boolean)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.transport.Connection)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaConnection, arg2: com.sun.corba.se.impl.protocol.giopmsgheaders.Message, arg3: java.nio.ByteBuffer)
    public getBroker(): com.sun.corba.se.pept.broker.Broker
    public getContactInfo(): com.sun.corba.se.pept.transport.ContactInfo
    public getConnection(): com.sun.corba.se.pept.transport.Connection
    public initializeMessage(): void
    public finishSendingRequest(): void
    public waitForResponse(): com.sun.corba.se.pept.encoding.InputObject
    public setOutputObject(arg0: com.sun.corba.se.pept.encoding.OutputObject): void
    public getOutputObject(): com.sun.corba.se.pept.encoding.OutputObject
    public setInputObject(arg0: com.sun.corba.se.pept.encoding.InputObject): void
    public getInputObject(): com.sun.corba.se.pept.encoding.InputObject
    public setReplyHeader(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyOrReplyMessage): void
    public getLocateReplyHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage
    public getReplyHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage
    public setReplyExceptionDetailMessage(arg0: java.lang.String | string): void
    public getRequestHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage
    public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
    public getEncodingVersion(): byte
    public getRequestId(): int
    public getRequestIdInteger(): java.lang.Integer
    public isOneWay(): boolean
    public getAddrDisposition(): short
    public getOperationName(): string
    public getRequestServiceContexts(): com.sun.corba.se.spi.servicecontext.ServiceContexts
    public getReplyServiceContexts(): com.sun.corba.se.spi.servicecontext.ServiceContexts
    public sendCancelRequestIfFinalFragmentNotSent(): void
    public sentFullMessage(): boolean
    public sentFragment(): boolean
    public setDIIInfo(arg0: org.omg.CORBA.Request): void
    public isDIIRequest(): boolean
    public unmarshalDIIUserException(arg0: java.lang.String | string, arg1: org.omg.CORBA_2_3.portable.InputStream): java.lang.Exception
    public setDIIException(arg0: java.lang.Exception): void
    public handleDIIReply(arg0: org.omg.CORBA_2_3.portable.InputStream): void
    public getDispatchHeader(): com.sun.corba.se.impl.protocol.giopmsgheaders.Message
    public setDispatchHeader(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): void
    public getDispatchBuffer(): java.nio.ByteBuffer
    public setDispatchBuffer(arg0: java.nio.ByteBuffer): void
    public getThreadPoolToUse(): int
    public getStreamFormatVersion(): byte
    public getStreamFormatVersionForReply(): byte
    public isSystemExceptionReply(): boolean
    public isUserExceptionReply(): boolean
    public isLocationForwardReply(): boolean
    public isDifferentAddrDispositionRequestedReply(): boolean
    public getAddrDispositionReply(): short
    public getForwardedIOR(): com.sun.corba.se.spi.ior.IOR
    public getSystemExceptionReply(): org.omg.CORBA.SystemException
    public getObjectKey(): com.sun.corba.se.spi.ior.ObjectKey
    public setProtocolHandler(arg0: com.sun.corba.se.spi.protocol.CorbaProtocolHandler): void
    public getProtocolHandler(): com.sun.corba.se.spi.protocol.CorbaProtocolHandler
    public createReply(): org.omg.CORBA.portable.OutputStream
    public createExceptionReply(): org.omg.CORBA.portable.OutputStream
    public executeReturnServantInResponseConstructor(): boolean
    public setExecuteReturnServantInResponseConstructor(arg0: boolean): void
    public executeRemoveThreadInfoInResponseConstructor(): boolean
    public setExecuteRemoveThreadInfoInResponseConstructor(arg0: boolean): void
    public executePIInResponseConstructor(): boolean
    public setExecutePIInResponseConstructor(arg0: boolean): void
    public handleRequest(arg0: com.sun.corba.se.pept.protocol.MessageMediator): boolean
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage_1_0): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage_1_1): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage_1_2): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage_1_0): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage_1_1): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage_1_2): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage_1_0): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage_1_1): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage_1_2): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage_1_0): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage_1_1): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateReplyMessage_1_2): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage_1_1): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.FragmentMessage_1_2): void
    public handleInput(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.CancelRequestMessage): void
    protected opAndId(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): string
    public handleRequest(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.RequestMessage, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    public handleRequest(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.LocateRequestMessage, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    protected handleRequestRequest(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    protected handleLocateRequest(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    public handleThrowableDuringServerDispatch(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: java.lang.Throwable, arg2: org.omg.CORBA.CompletionStatus): void
    protected handleThrowableDuringServerDispatch(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: java.lang.Throwable, arg2: org.omg.CORBA.CompletionStatus, arg3: int): void
    protected convertThrowableToSystemException(arg0: java.lang.Throwable, arg1: org.omg.CORBA.CompletionStatus): org.omg.CORBA.SystemException
    protected handleAddressingDisposition(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.impl.protocol.AddressingDispositionException): void
    public createResponse(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    public createUserExceptionResponse(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    public createUnknownExceptionResponse(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: org.omg.CORBA.portable.UnknownException): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    public createSystemExceptionResponse(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: org.omg.CORBA.SystemException, arg2: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    public createLocationForward(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.ior.IOR, arg2: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    protected createResponseHelper(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    protected createResponseHelper(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts, arg2: boolean): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    protected createResponseHelper(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage, arg2: com.sun.corba.se.spi.ior.IOR): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    protected runServantPostInvoke(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    protected runInterceptors(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage): void
    protected runRemoveThreadInfo(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    protected getServiceContextsForReply(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts): com.sun.corba.se.spi.servicecontext.ServiceContexts
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}