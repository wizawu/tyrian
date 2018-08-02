declare namespace org {
    namespace omg {
        namespace PortableServer {
            class _ServantLocatorStub extends org.omg.CORBA.portable.ObjectImpl implements org.omg.PortableServer.ServantLocator {
                public static _opsClass: java.lang.Class
                public constructor()
                public preinvoke(arg0: byte[], arg1: org.omg.PortableServer.POA, arg2: java.lang.String | string, arg3: org.omg.PortableServer.ServantLocatorPackage.CookieHolder): org.omg.PortableServer.Servant
                public postinvoke(arg0: byte[], arg1: org.omg.PortableServer.POA, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: org.omg.PortableServer.Servant): void
                public _ids(): java.lang.String[]
                public static class: java.lang.Class<any>
            }
        }
    }
}