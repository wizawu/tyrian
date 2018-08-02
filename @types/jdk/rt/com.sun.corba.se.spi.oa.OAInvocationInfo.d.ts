declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace oa {
class OAInvocationInfo extends org.omg.CORBA.portable.ServantObject {
    public constructor(arg0: com.sun.corba.se.spi.oa.ObjectAdapter, arg1: byte[])
    public constructor(arg0: com.sun.corba.se.spi.oa.OAInvocationInfo, arg1: java.lang.String | string)
    public oa(): com.sun.corba.se.spi.oa.ObjectAdapter
    public id(): byte[]
    public getServantContainer(): java.lang.Object
    public getCookieHolder(): org.omg.PortableServer.ServantLocatorPackage.CookieHolder
    public getOperation(): string
    public getCopierFactory(): com.sun.corba.se.spi.copyobject.ObjectCopierFactory
    public setOperation(arg0: java.lang.String | string): void
    public setCopierFactory(arg0: com.sun.corba.se.spi.copyobject.ObjectCopierFactory | com.sun.corba.se.spi.copyobject.ObjectCopierFactory$$Lambda): void
    public setServant(arg0: java.lang.Object): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}