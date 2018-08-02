declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace oa {
                        interface ObjectAdapter {
                            getORB(): com.sun.corba.se.spi.orb.ORB
                            getEffectivePolicy(arg0: int): org.omg.CORBA.Policy
                            getIORTemplate(): com.sun.corba.se.spi.ior.IORTemplate
                            getManagerId(): int
                            getState(): short
                            getAdapterTemplate(): org.omg.PortableInterceptor.ObjectReferenceTemplate
                            getCurrentFactory(): org.omg.PortableInterceptor.ObjectReferenceFactory
                            setCurrentFactory(arg0: org.omg.PortableInterceptor.ObjectReferenceFactory): void
                            getLocalServant(arg0: byte[]): org.omg.CORBA.Object
                            getInvocationServant(arg0: com.sun.corba.se.spi.oa.OAInvocationInfo): void
                            enter(): void
                            exit(): void
                            returnServant(): void
                            makeInvocationInfo(arg0: byte[]): com.sun.corba.se.spi.oa.OAInvocationInfo
                            getInterfaces(arg0: java.lang.Object, arg1: byte[]): java.lang.String[]
                        }
                    }
                }
            }
        }
    }
}