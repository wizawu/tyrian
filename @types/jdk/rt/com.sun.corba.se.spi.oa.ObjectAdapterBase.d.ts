declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace oa {
abstract class ObjectAdapterBase extends org.omg.CORBA.LocalObject implements com.sun.corba.se.spi.oa.ObjectAdapter {
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
    public iorWrapper(): com.sun.corba.se.impl.logging.POASystemException
    public lifecycleWrapper(): com.sun.corba.se.impl.logging.POASystemException
    public omgLifecycleWrapper(): com.sun.corba.se.impl.logging.OMGSystemException
    public invocationWrapper(): com.sun.corba.se.impl.logging.POASystemException
    public omgInvocationWrapper(): com.sun.corba.se.impl.logging.OMGSystemException
    public initializeTemplate(arg0: com.sun.corba.se.spi.ior.ObjectKeyTemplate, arg1: boolean, arg2: com.sun.corba.se.impl.oa.poa.Policies, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: com.sun.corba.se.spi.ior.ObjectAdapterId): void
    public makeObject(arg0: java.lang.String | string, arg1: byte[]): org.omg.CORBA.Object
    public getAdapterId(): byte[]
    public getORB(): com.sun.corba.se.spi.orb.ORB
    public getEffectivePolicy(arg0: int): org.omg.CORBA.Policy
    public getIORTemplate(): com.sun.corba.se.spi.ior.IORTemplate
    public getManagerId(): int
    public getState(): short
    public getAdapterTemplate(): org.omg.PortableInterceptor.ObjectReferenceTemplate
    public getCurrentFactory(): org.omg.PortableInterceptor.ObjectReferenceFactory
    public setCurrentFactory(arg0: org.omg.PortableInterceptor.ObjectReferenceFactory): void
    public getLocalServant(arg0: byte[]): org.omg.CORBA.Object
    public getInvocationServant(arg0: com.sun.corba.se.spi.oa.OAInvocationInfo): void
    public returnServant(): void
    public enter(): void
    public exit(): void
    protected getObjectCopierFactory(): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
    public makeInvocationInfo(arg0: byte[]): com.sun.corba.se.spi.oa.OAInvocationInfo
    public getInterfaces(arg0: java.lang.Object, arg1: byte[]): java.lang.String[]
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}