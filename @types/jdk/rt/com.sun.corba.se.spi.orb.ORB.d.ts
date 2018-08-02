declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
abstract class ORB extends com.sun.corba.se.org.omg.CORBA.ORB implements com.sun.corba.se.pept.broker.Broker , com.sun.corba.se.impl.corba.TypeCodeFactory {
    public static ORBInitDebug: boolean
    public transportDebugFlag: boolean
    public subcontractDebugFlag: boolean
    public poaDebugFlag: boolean
    public poaConcurrencyDebugFlag: boolean
    public poaFSMDebugFlag: boolean
    public orbdDebugFlag: boolean
    public namingDebugFlag: boolean
    public serviceContextDebugFlag: boolean
    public transientObjectManagerDebugFlag: boolean
    public giopVersionDebugFlag: boolean
    public shutdownDebugFlag: boolean
    public giopDebugFlag: boolean
    public invocationTimingDebugFlag: boolean
    public orbInitDebugFlag: boolean
    protected static staticWrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
    protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
    protected omgWrapper: com.sun.corba.se.impl.logging.OMGSystemException
    protected monitoringManager: com.sun.corba.se.spi.monitoring.MonitoringManager
    public isLocalHost(arg0: java.lang.String | string): boolean
    public isLocalServerId(arg0: int, arg1: int): boolean
    public peekInvocationInfo(): com.sun.corba.se.spi.oa.OAInvocationInfo
    public pushInvocationInfo(arg0: com.sun.corba.se.spi.oa.OAInvocationInfo): void
    public popInvocationInfo(): com.sun.corba.se.spi.oa.OAInvocationInfo
    public getCorbaTransportManager(): com.sun.corba.se.spi.transport.CorbaTransportManager
    public getLegacyServerSocketManager(): com.sun.corba.se.spi.legacy.connection.LegacyServerSocketManager
    public destroy(): void
    public static getPresentationManager(): com.sun.corba.se.spi.presentation.rmi.PresentationManager
    public static getStubFactoryFactory(): com.sun.corba.se.spi.presentation.rmi.PresentationManager$StubFactoryFactory
    protected constructor()
    public get_primitive_tc(arg0: int): com.sun.corba.se.impl.corba.TypeCodeImpl
    public setTypeCode(arg0: java.lang.String | string, arg1: com.sun.corba.se.impl.corba.TypeCodeImpl): void
    public getTypeCode(arg0: java.lang.String | string): com.sun.corba.se.impl.corba.TypeCodeImpl
    public getMonitoringManager(): com.sun.corba.se.spi.monitoring.MonitoringManager
    public set_parameters(arg0: java.util.Properties): void
    public getORBVersion(): com.sun.corba.se.spi.orb.ORBVersion
    public setORBVersion(arg0: com.sun.corba.se.spi.orb.ORBVersion): void
    public getFVDCodeBaseIOR(): com.sun.corba.se.spi.ior.IOR
    public handleBadServerId(arg0: com.sun.corba.se.spi.ior.ObjectKey): void
    public setBadServerIdHandler(arg0: com.sun.corba.se.impl.oa.poa.BadServerIdHandler | com.sun.corba.se.impl.oa.poa.BadServerIdHandler$$Lambda): void
    public initBadServerIdHandler(): void
    public notifyORB(): void
    public getPIHandler(): com.sun.corba.se.spi.protocol.PIHandler
    public checkShutdownState(): void
    public isDuringDispatch(): boolean
    public startingDispatch(): void
    public finishedDispatch(): void
    public getTransientServerId(): int
    public getServiceContextRegistry(): com.sun.corba.se.spi.servicecontext.ServiceContextRegistry
    public getRequestDispatcherRegistry(): com.sun.corba.se.spi.protocol.RequestDispatcherRegistry
    public getORBData(): com.sun.corba.se.spi.orb.ORBData
    public setClientDelegateFactory(arg0: com.sun.corba.se.spi.protocol.ClientDelegateFactory | com.sun.corba.se.spi.protocol.ClientDelegateFactory$$Lambda): void
    public getClientDelegateFactory(): com.sun.corba.se.spi.protocol.ClientDelegateFactory
    public setCorbaContactInfoListFactory(arg0: com.sun.corba.se.spi.transport.CorbaContactInfoListFactory): void
    public getCorbaContactInfoListFactory(): com.sun.corba.se.spi.transport.CorbaContactInfoListFactory
    public setResolver(arg0: com.sun.corba.se.spi.resolver.Resolver): void
    public getResolver(): com.sun.corba.se.spi.resolver.Resolver
    public setLocalResolver(arg0: com.sun.corba.se.spi.resolver.LocalResolver): void
    public getLocalResolver(): com.sun.corba.se.spi.resolver.LocalResolver
    public setURLOperation(arg0: com.sun.corba.se.spi.orb.Operation | com.sun.corba.se.spi.orb.Operation$$Lambda): void
    public getURLOperation(): com.sun.corba.se.spi.orb.Operation
    public setINSDelegate(arg0: com.sun.corba.se.spi.protocol.CorbaServerRequestDispatcher): void
    public getTaggedComponentFactoryFinder(): com.sun.corba.se.spi.ior.TaggedComponentFactoryFinder
    public getTaggedProfileFactoryFinder(): com.sun.corba.se.spi.ior.IdentifiableFactoryFinder
    public getTaggedProfileTemplateFactoryFinder(): com.sun.corba.se.spi.ior.IdentifiableFactoryFinder
    public getObjectKeyFactory(): com.sun.corba.se.spi.ior.ObjectKeyFactory
    public setObjectKeyFactory(arg0: com.sun.corba.se.spi.ior.ObjectKeyFactory): void
    public getLogger(arg0: java.lang.String | string): java.util.logging.Logger
    public static staticGetLogger(arg0: java.lang.String | string): java.util.logging.Logger
    public getLogWrapper(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.logging.LogWrapperFactory | com.sun.corba.se.spi.logging.LogWrapperFactory$$Lambda): com.sun.corba.se.spi.logging.LogWrapperBase
    public static staticGetLogWrapper(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.corba.se.spi.logging.LogWrapperFactory | com.sun.corba.se.spi.logging.LogWrapperFactory$$Lambda): com.sun.corba.se.spi.logging.LogWrapperBase
    public getByteBufferPool(): com.sun.corba.se.pept.transport.ByteBufferPool
    public setThreadPoolManager(arg0: com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolManager): void
    public getThreadPoolManager(): com.sun.corba.se.spi.orbutil.threadpool.ThreadPoolManager
    public getCopierManager(): com.sun.corba.se.spi.copyobject.CopierManager
    public validateIORClass(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}