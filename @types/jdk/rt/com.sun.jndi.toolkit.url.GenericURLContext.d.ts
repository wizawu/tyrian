declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace url {
                    abstract class GenericURLContext implements javax.naming.Context {
                        protected myEnv: java.util.Hashtable<java.lang.String, java.lang.Object>
                        public constructor(arg0: java.util.Hashtable<any, any>)
                        public close(): void
                        public getNameInNamespace(): string
                        protected abstract getRootURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ResolveResult
                        protected getURLSuffix(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.naming.Name
                        protected getURLPrefix(arg0: java.lang.String | string): string
                        protected urlEquals(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                        protected getContinuationContext(arg0: javax.naming.Name): javax.naming.Context
                        public lookup(arg0: java.lang.String | string): java.lang.Object
                        public lookup(arg0: javax.naming.Name): java.lang.Object
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public unbind(arg0: java.lang.String | string): void
                        public unbind(arg0: javax.naming.Name): void
                        public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                        public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public destroySubcontext(arg0: java.lang.String | string): void
                        public destroySubcontext(arg0: javax.naming.Name): void
                        public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                        public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                        public lookupLink(arg0: java.lang.String | string): java.lang.Object
                        public lookupLink(arg0: javax.naming.Name): java.lang.Object
                        public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                        public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                        public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                        public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                        public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                        public getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
                        public static class: java.lang.Class<any>
                    }
                    interface GenericURLContext$$Lambda implements javax.naming.Context {
                        (arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ResolveResult
                    }
                }
            }
        }
    }
}