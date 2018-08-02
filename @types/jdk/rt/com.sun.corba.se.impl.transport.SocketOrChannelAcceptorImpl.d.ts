declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class SocketOrChannelAcceptorImpl extends com.sun.corba.se.impl.transport.EventHandlerBase implements com.sun.corba.se.spi.transport.CorbaAcceptor , com.sun.corba.se.spi.transport.SocketOrChannelAcceptor , com.sun.corba.se.spi.orbutil.threadpool.Work , com.sun.corba.se.spi.transport.SocketInfo , com.sun.corba.se.spi.legacy.connection.LegacyServerSocketEndPointInfo {
    protected serverSocketChannel: java.nio.channels.ServerSocketChannel
    protected serverSocket: java.net.ServerSocket
    protected port: int
    protected enqueueTime: long
    protected initialized: boolean
    protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
    protected connectionCache: com.sun.corba.se.pept.transport.InboundConnectionCache
    protected type: string
    protected name: string
    protected hostname: string
    protected locatorPort: int
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int)
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: int, arg2: java.lang.String | string, arg3: java.lang.String | string)
    public initialize(): boolean
    protected internalInitialize(): void
    public initialized(): boolean
    public getConnectionCacheType(): string
    public setConnectionCache(arg0: com.sun.corba.se.pept.transport.InboundConnectionCache): void
    public getConnectionCache(): com.sun.corba.se.pept.transport.InboundConnectionCache
    public shouldRegisterAcceptEvent(): boolean
    public accept(): void
    public close(): void
    public getEventHandler(): com.sun.corba.se.pept.transport.EventHandler
    public getObjectAdapterId(): string
    public getObjectAdapterManagerId(): string
    public addToIORTemplate(arg0: com.sun.corba.se.spi.ior.IORTemplate, arg1: com.sun.corba.se.impl.oa.poa.Policies, arg2: java.lang.String | string): void
    public getMonitoringName(): string
    public getChannel(): java.nio.channels.SelectableChannel
    public getInterestOps(): int
    public getAcceptor(): com.sun.corba.se.pept.transport.Acceptor
    public getConnection(): com.sun.corba.se.pept.transport.Connection
    public doWork(): void
    public setEnqueueTime(arg0: long): void
    public getEnqueueTime(): long
    public createMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection): com.sun.corba.se.pept.protocol.MessageMediator
    public finishCreatingMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.Connection, arg2: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.protocol.MessageMediator
    public createInputObject(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.InputObject
    public createOutputObject(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.OutputObject
    public getServerSocket(): java.net.ServerSocket
    public toString(): string
    protected toStringName(): string
    protected dprint(arg0: java.lang.String | string): void
    protected dprint(arg0: java.lang.String | string, arg1: java.lang.Throwable): void
    public getType(): string
    public getHostName(): string
    public getHost(): string
    public getPort(): int
    public getLocatorPort(): int
    public setLocatorPort(arg0: int): void
    public getName(): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}