declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace transport {
interface CorbaConnection extends com.sun.corba.se.pept.transport.Connection , com.sun.corba.se.spi.legacy.connection.Connection {
    OPENING: int
    ESTABLISHED: int
    CLOSE_SENT: int
    CLOSE_RECVD: int
    ABORT: int
    shouldUseDirectByteBuffers(): boolean
    shouldReadGiopHeaderOnly(): boolean
    read(arg0: int, arg1: int, arg2: int, arg3: long): java.nio.ByteBuffer
    read(arg0: java.nio.ByteBuffer, arg1: int, arg2: int, arg3: long): java.nio.ByteBuffer
    write(arg0: java.nio.ByteBuffer): void
    dprint(arg0: java.lang.String | string): void
    getNextRequestId(): int
    getBroker(): com.sun.corba.se.spi.orb.ORB
    getCodeSetContext(): com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetContext
    setCodeSetContext(arg0: com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetContext): void
    clientRequestMapGet(arg0: int): com.sun.corba.se.pept.protocol.MessageMediator
    clientReply_1_1_Put(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    clientReply_1_1_Get(): com.sun.corba.se.pept.protocol.MessageMediator
    clientReply_1_1_Remove(): void
    serverRequest_1_1_Put(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
    serverRequest_1_1_Get(): com.sun.corba.se.pept.protocol.MessageMediator
    serverRequest_1_1_Remove(): void
    isPostInitialContexts(): boolean
    setPostInitialContexts(): void
    purgeCalls(arg0: org.omg.CORBA.SystemException, arg1: boolean, arg2: boolean): void
    setCodeBaseIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
    getCodeBaseIOR(): com.sun.corba.se.spi.ior.IOR
    getCodeBase(): com.sun.org.omg.SendingContext.CodeBase
    sendCloseConnection(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): void
    sendMessageError(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): void
    sendCancelRequest(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg1: int): void
    sendCancelRequestWithLock(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg1: int): void
    getResponseWaitingRoom(): com.sun.corba.se.pept.transport.ResponseWaitingRoom
    serverRequestMapPut(arg0: int, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    serverRequestMapGet(arg0: int): com.sun.corba.se.spi.protocol.CorbaMessageMediator
    serverRequestMapRemove(arg0: int): void
    getSocketChannel(): java.nio.channels.SocketChannel
    serverRequestProcessingBegins(): void
    serverRequestProcessingEnds(): void
    closeConnectionResources(): void
}

                    }
                }
            }
        }
    }
}