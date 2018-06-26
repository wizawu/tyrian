declare namespace com {
    namespace sun {
        namespace jndi {
            namespace rmi {
                namespace registry {
                    class ReferenceWrapper extends java.rmi.server.UnicastRemoteObject implements com.sun.jndi.rmi.registry.RemoteReference {
                        protected wrappee: javax.naming.Reference
                        public constructor(arg0: javax.naming.Reference)
                        public getReference(): javax.naming.Reference
                        public static class: java.lang.Class<any>
                    }
                    class RegistryContext implements javax.naming.Context , javax.naming.Referenceable {
                        public static SECURITY_MGR: string
                        public constructor(arg0: java.lang.String | string, arg1: int, arg2: java.util.Hashtable<any, any>)
                        protected finalize(): void
                        public lookup(arg0: javax.naming.Name): java.lang.Object
                        public lookup(arg0: java.lang.String | string): java.lang.Object
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public unbind(arg0: javax.naming.Name): void
                        public unbind(arg0: java.lang.String | string): void
                        public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                        public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public destroySubcontext(arg0: javax.naming.Name): void
                        public destroySubcontext(arg0: java.lang.String | string): void
                        public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                        public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                        public lookupLink(arg0: javax.naming.Name): java.lang.Object
                        public lookupLink(arg0: java.lang.String | string): java.lang.Object
                        public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                        public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                        public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                        public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                        public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                        public getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
                        public close(): void
                        public getNameInNamespace(): string
                        public getReference(): javax.naming.Reference
                        public static wrapRemoteException(arg0: java.rmi.RemoteException): javax.naming.NamingException
                        public static class: java.lang.Class<any>
                    }
                    class RegistryContext$$Lambda implements javax.naming.Context , javax.naming.Referenceable {
                        public static SECURITY_MGR: string
                    }
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
                    interface RemoteReference extends java.rmi.Remote {
                        getReference(): javax.naming.Reference
                    }
                }
            }
            namespace url {
                namespace rmi {
                    class rmiURLContext extends com.sun.jndi.toolkit.url.GenericURLContext {
                        public constructor(arg0: java.util.Hashtable<any, any>)
                        protected getRootURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ResolveResult
                        public static class: java.lang.Class<any>
                    }
                    class rmiURLContextFactory implements javax.naming.spi.ObjectFactory {
                        public constructor()
                        public getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class rmiURLContextFactory$$Lambda implements javax.naming.spi.ObjectFactory {
                        public constructor()
                    }
                }
            }
        }
    }
}
