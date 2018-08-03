declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace ctx {
                    abstract class PartialCompositeContext implements javax.naming.Context , javax.naming.spi.Resolver {
                        protected static readonly _PARTIAL: int
                        protected static readonly _COMPONENT: int
                        protected static readonly _ATOMIC: int
                        protected _contextType: int
                        protected constructor()
                        protected abstract p_resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<any>, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.spi.ResolveResult
                        protected abstract p_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected abstract p_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected abstract p_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected abstract p_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected abstract p_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract p_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract p_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract p_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract p_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected abstract p_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract p_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected p_getEnvironment(): java.util.Hashtable<any, any>
                        public resolveToClass(arg0: java.lang.String | string, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
                        public resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
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
                        protected static allEmpty(arg0: javax.naming.Name): boolean
                        protected static getPCContext(arg0: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.PartialCompositeContext
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}