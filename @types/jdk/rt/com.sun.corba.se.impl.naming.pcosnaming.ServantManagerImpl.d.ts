declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace naming {
                        namespace pcosnaming {
class ServantManagerImpl extends org.omg.CORBA.LocalObject implements org.omg.PortableServer.ServantLocator {
    public preinvoke(arg0: byte[], arg1: org.omg.PortableServer.POA, arg2: java.lang.String | string, arg3: org.omg.PortableServer.ServantLocatorPackage.CookieHolder): org.omg.PortableServer.Servant
    public postinvoke(arg0: byte[], arg1: org.omg.PortableServer.POA, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: org.omg.PortableServer.Servant): void
    public readInContext(arg0: java.lang.String | string): com.sun.corba.se.impl.naming.pcosnaming.NamingContextImpl
    public addContext(arg0: java.lang.String | string, arg1: com.sun.corba.se.impl.naming.pcosnaming.NamingContextImpl): com.sun.corba.se.impl.naming.pcosnaming.NamingContextImpl
    public updateContext(arg0: java.lang.String | string, arg1: com.sun.corba.se.impl.naming.pcosnaming.NamingContextImpl): void
    public static getRootObjectKey(): string
    public getNewObjectKey(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}