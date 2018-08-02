declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace interceptors {
class PIHandlerImpl implements com.sun.corba.se.spi.protocol.PIHandler {
    public close(): void
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String[])
    public initialize(): void
    public destroyInterceptors(): void
    public objectAdapterCreated(arg0: com.sun.corba.se.spi.oa.ObjectAdapter): void
    public adapterManagerStateChanged(arg0: int, arg1: short): void
    public adapterStateChanged(arg0: org.omg.PortableInterceptor.ObjectReferenceTemplate[], arg1: short): void
    public disableInterceptorsThisThread(): void
    public enableInterceptorsThisThread(): void
    public invokeClientPIStartingPoint(): void
    public makeCompletedClientRequest(arg0: int, arg1: java.lang.Exception): java.lang.Exception
    public invokeClientPIEndingPoint(arg0: int, arg1: java.lang.Exception): java.lang.Exception
    public handleClientPIEndingPoint(arg0: int, arg1: java.lang.Exception, arg2: boolean): java.lang.Exception
    public initiateClientPIRequest(arg0: boolean): void
    public cleanupClientPIRequest(): void
    public setClientPIInfo(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
    public setClientPIInfo(arg0: com.sun.corba.se.impl.corba.RequestImpl): void
    public invokeServerPIStartingPoint(): void
    public invokeServerPIIntermediatePoint(): void
    public invokeServerPIEndingPoint(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage): void
    public setServerPIInfo(arg0: java.lang.Exception): void
    public setServerPIInfo(arg0: org.omg.CORBA.NVList): void
    public setServerPIExceptionInfo(arg0: org.omg.CORBA.Any): void
    public setServerPIInfo(arg0: org.omg.CORBA.Any): void
    public initializeServerPIInfo(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.oa.ObjectAdapter, arg2: byte[], arg3: com.sun.corba.se.spi.ior.ObjectKeyTemplate): void
    public setServerPIInfo(arg0: java.lang.Object, arg1: java.lang.String | string): void
    public cleanupServerPIRequest(): void
    public register_interceptor(arg0: org.omg.PortableInterceptor.Interceptor, arg1: int): void
    public getPICurrent(): org.omg.PortableInterceptor.Current
    public create_policy(arg0: int, arg1: org.omg.CORBA.Any): org.omg.CORBA.Policy
    public registerPolicyFactory(arg0: int, arg1: org.omg.PortableInterceptor.PolicyFactory): void
    public allocateServerRequestId(): int
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}