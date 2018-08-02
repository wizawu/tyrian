declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace protocol {
                        interface PIHandler extends java.io.Closeable {
                            initialize(): void
                            destroyInterceptors(): void
                            objectAdapterCreated(arg0: com.sun.corba.se.spi.oa.ObjectAdapter): void
                            adapterManagerStateChanged(arg0: int, arg1: short): void
                            adapterStateChanged(arg0: org.omg.PortableInterceptor.ObjectReferenceTemplate[], arg1: short): void
                            disableInterceptorsThisThread(): void
                            enableInterceptorsThisThread(): void
                            invokeClientPIStartingPoint(): void
                            invokeClientPIEndingPoint(arg0: int, arg1: java.lang.Exception): java.lang.Exception
                            makeCompletedClientRequest(arg0: int, arg1: java.lang.Exception): java.lang.Exception
                            initiateClientPIRequest(arg0: boolean): void
                            cleanupClientPIRequest(): void
                            setClientPIInfo(arg0: com.sun.corba.se.impl.corba.RequestImpl): void
                            setClientPIInfo(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator): void
                            invokeServerPIStartingPoint(): void
                            invokeServerPIIntermediatePoint(): void
                            invokeServerPIEndingPoint(arg0: com.sun.corba.se.impl.protocol.giopmsgheaders.ReplyMessage): void
                            initializeServerPIInfo(arg0: com.sun.corba.se.spi.protocol.CorbaMessageMediator, arg1: com.sun.corba.se.spi.oa.ObjectAdapter, arg2: byte[], arg3: com.sun.corba.se.spi.ior.ObjectKeyTemplate): void
                            setServerPIInfo(arg0: java.lang.Object, arg1: java.lang.String | string): void
                            setServerPIInfo(arg0: java.lang.Exception): void
                            setServerPIInfo(arg0: org.omg.CORBA.NVList): void
                            setServerPIExceptionInfo(arg0: org.omg.CORBA.Any): void
                            setServerPIInfo(arg0: org.omg.CORBA.Any): void
                            cleanupServerPIRequest(): void
                            create_policy(arg0: int, arg1: org.omg.CORBA.Any): org.omg.CORBA.Policy
                            register_interceptor(arg0: org.omg.PortableInterceptor.Interceptor, arg1: int): void
                            getPICurrent(): org.omg.PortableInterceptor.Current
                            registerPolicyFactory(arg0: int, arg1: org.omg.PortableInterceptor.PolicyFactory): void
                            allocateServerRequestId(): int
                        }
                    }
                }
            }
        }
    }
}