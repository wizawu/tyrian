declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class LdapCtxFactory implements javax.naming.spi.ObjectFactory , javax.naming.spi.InitialContextFactory {
                    public static ADDRESS_TYPE: string
                    public constructor()
                    public getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
                    public getInitialContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
                    public static getLdapCtxInstance(arg0: java.lang.Object, arg1: java.util.Hashtable<any, any>): javax.naming.directory.DirContext
                    public static createTypeNameAttr(arg0: java.lang.Class<any>): javax.naming.directory.Attribute
                    public static class: java.lang.Class<any>
                }
                class LdapCtxFactory$$Lambda implements javax.naming.spi.ObjectFactory , javax.naming.spi.InitialContextFactory {
                    public static ADDRESS_TYPE: string
                }
            }
        }
    }
}