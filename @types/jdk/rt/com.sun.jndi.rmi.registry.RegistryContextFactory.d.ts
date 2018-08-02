declare namespace com {
    namespace sun {
        namespace jndi {
            namespace rmi {
                namespace registry {
class RegistryContextFactory implements javax.naming.spi.ObjectFactory , javax.naming.spi.InitialContextFactory {
    public static ADDRESS_TYPE: string
    public constructor()
    public getInitialContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
    public getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
    public static class: java.lang.Class<any>
}

class RegistryContextFactory$$Lambda implements javax.naming.spi.ObjectFactory , javax.naming.spi.InitialContextFactory {
    public static ADDRESS_TYPE: string
}

                }
            }
        }
    }
}