declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
                        class SocketOrChannelConnectionImpl extends com.sun.corba.se.impl.transport.EventHandlerBase implements com.sun.corba.se.spi.transport.CorbaConnection , com.sun.corba.se.spi.orbutil.threadpool.Work {
                            public static dprintWriteLocks: boolean
                            protected enqueueTime: long
                            protected socketChannel: java.nio.channels.SocketChannel
                            protected contactInfo: com.sun.corba.se.spi.transport.CorbaContactInfo
                            protected acceptor: com.sun.corba.se.pept.transport.Acceptor
                            protected connectionCache: com.sun.corba.se.pept.transport.ConnectionCache
                            protected socket: java.net.Socket
                            protected timeStamp: long
                            protected isServer: boolean
                            protected requestId: int
                            protected responseWaitingRoom: com.sun.corba.se.spi.transport.CorbaResponseWaitingRoom
                            protected state: int
                            protected stateEvent: java.lang.Object
                            protected writeEvent: java.lang.Object
                            protected writeLocked: boolean
                            protected serverRequestCount: int
                            protected postInitialContexts: boolean
                            protected codeBaseServerIOR: com.sun.corba.se.spi.ior.IOR
                            protected cachedCodeBase: com.sun.corba.se.impl.encoding.CachedCodeBase
                            protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
                            protected readTimeouts: com.sun.corba.se.spi.transport.ReadTimeouts
                            protected shouldReadGiopHeaderOnly: boolean
                            protected partialMessageMediator: com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            protected codeSetContext: com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetContext
                            protected clientReply_1_1: com.sun.corba.se.pept.protocol.MessageMediator
                            protected serverRequest_1_1: com.sun.corba.se.pept.protocol.MessageMediator
                            public getSocketChannel(): java.nio.channels.SocketChannel
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: boolean, arg2: boolean)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaContactInfo, arg2: boolean, arg3: boolean, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: int)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaContactInfo, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: int)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.transport.Acceptor, arg2: java.net.Socket, arg3: boolean, arg4: boolean)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.pept.transport.Acceptor, arg2: java.net.Socket)
                            public shouldRegisterReadEvent(): boolean
                            public shouldRegisterServerReadEvent(): boolean
                            public read(): boolean
                            protected readBits(): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            protected finishReadingBits(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            protected dispatch(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): boolean
                            public shouldUseDirectByteBuffers(): boolean
                            public read(arg0: int, arg1: int, arg2: int, arg3: long): java.nio.ByteBuffer
                            public read(arg0: java.nio.ByteBuffer, arg1: int, arg2: int, arg3: long): java.nio.ByteBuffer
                            public readFully(arg0: java.nio.ByteBuffer, arg1: int, arg2: long): void
                            public readFully(arg0: java.io.InputStream, arg1: byte[], arg2: int, arg3: int, arg4: long): void
                            public write(arg0: java.nio.ByteBuffer): void
                            public close(): void
                            public closeConnectionResources(): void
                            public getAcceptor(): com.sun.corba.se.pept.transport.Acceptor
                            public getContactInfo(): com.sun.corba.se.pept.transport.ContactInfo
                            public getEventHandler(): com.sun.corba.se.pept.transport.EventHandler
                            public createOutputObject(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.OutputObject
                            public isServer(): boolean
                            public isBusy(): boolean
                            public getTimeStamp(): long
                            public setTimeStamp(arg0: long): void
                            public setState(arg0: java.lang.String | string): void
                            public writeLock(): void
                            public writeUnlock(): void
                            public sendWithoutLock(arg0: com.sun.corba.se.pept.encoding.OutputObject): void
                            public registerWaiter(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            public unregisterWaiter(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            public waitForResponse(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
                            public setConnectionCache(arg0: com.sun.corba.se.pept.transport.ConnectionCache): void
                            public getConnectionCache(): com.sun.corba.se.pept.transport.ConnectionCache
                            public setUseSelectThreadToWait(arg0: boolean): void
                            public handleEvent(): void
                            public getChannel(): java.nio.channels.SelectableChannel
                            public getInterestOps(): int
                            public getConnection(): com.sun.corba.se.pept.transport.Connection
                            public getName(): string
                            public doWork(): void
                            public setEnqueueTime(arg0: long): void
                            public getEnqueueTime(): long
                            public shouldReadGiopHeaderOnly(): boolean
                            protected setReadGiopHeaderOnly(arg0: boolean): void
                            public getResponseWaitingRoom(): com.sun.corba.se.pept.transport.ResponseWaitingRoom
                            public serverRequestMapPut(arg0: int, arg1: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
                            public serverRequestMapGet(arg0: int): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            public serverRequestMapRemove(arg0: int): void
                            public getSocket(): java.net.Socket
                            public serverRequestProcessingBegins(): void
                            public serverRequestProcessingEnds(): void
                            public getNextRequestId(): int
                            public getBroker(): com.sun.corba.se.spi.orb.ORB
                            public getCodeSetContext(): com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetContext
                            public setCodeSetContext(arg0: com.sun.corba.se.impl.encoding.CodeSetComponentInfo$CodeSetContext): void
                            public clientRequestMapGet(arg0: int): com.sun.corba.se.pept.protocol.MessageMediator
                            public clientReply_1_1_Put(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            public clientReply_1_1_Get(): com.sun.corba.se.pept.protocol.MessageMediator
                            public clientReply_1_1_Remove(): void
                            public serverRequest_1_1_Put(arg0: com.sun.corba.se.pept.protocol.MessageMediator): void
                            public serverRequest_1_1_Get(): com.sun.corba.se.pept.protocol.MessageMediator
                            public serverRequest_1_1_Remove(): void
                            protected getStateString(arg0: int): string
                            public isPostInitialContexts(): boolean
                            public setPostInitialContexts(): void
                            public purgeCalls(arg0: org.omg.CORBA.SystemException, arg1: boolean, arg2: boolean): void
                            public sendCloseConnection(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): void
                            public sendMessageError(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): void
                            public sendCancelRequest(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg1: int): void
                            protected sendHelper(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg1: com.sun.corba.se.impl.protocol.giopmsgheaders.Message): void
                            public sendCancelRequestWithLock(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion, arg1: int): void
                            public setCodeBaseIOR(arg0: com.sun.corba.se.spi.ior.IOR): void
                            public getCodeBaseIOR(): com.sun.corba.se.spi.ior.IOR
                            public getCodeBase(): com.sun.org.omg.SendingContext.CodeBase
                            protected setReadTimeouts(arg0: com.sun.corba.se.spi.transport.ReadTimeouts): void
                            protected setPartialMessageMediator(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
                            protected getPartialMessageMediator(): com.sun.corba.se.spi.protocol.CorbaMessageMediator
                            public toString(): string
                            public dprint(arg0: java.lang.String | string): void
                            protected dprint(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}