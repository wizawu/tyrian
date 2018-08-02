declare namespace org {
    namespace omg {
        namespace PortableServer {
interface ServantLocatorOperations extends org.omg.PortableServer.ServantManagerOperations {
    preinvoke(arg0: byte[], arg1: org.omg.PortableServer.POA, arg2: java.lang.String | string, arg3: org.omg.PortableServer.ServantLocatorPackage.CookieHolder): org.omg.PortableServer.Servant
    postinvoke(arg0: byte[], arg1: org.omg.PortableServer.POA, arg2: java.lang.String | string, arg3: java.lang.Object, arg4: org.omg.PortableServer.Servant): void
}

        }
    }
}