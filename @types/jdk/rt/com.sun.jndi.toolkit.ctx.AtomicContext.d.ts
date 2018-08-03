declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace ctx {
                    abstract class AtomicContext extends com.sun.jndi.toolkit.ctx.ComponentContext {
                        protected constructor()
                        protected abstract a_lookup(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected abstract a_lookupLink(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected abstract a_list(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected abstract a_listBindings(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected abstract a_bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract a_rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract a_unbind(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract a_destroySubcontext(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract a_createSubcontext(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected abstract a_rename(arg0: java.lang.String | string, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected abstract a_getNameParser(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected abstract c_parseComponent(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.StringHeadTail
                        protected a_resolveIntermediate_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_lookup_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_lookupLink_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_list_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected a_listBindings_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected a_bind_nns(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rebind_nns(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_unbind_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_createSubcontext_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected a_destroySubcontext_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rename_nns(arg0: java.lang.String | string, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_getNameParser_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected isEmpty(arg0: java.lang.String | string): boolean
                        protected c_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected c_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected c_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected c_resolveIntermediate_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookup_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookupLink_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_list_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected c_listBindings_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected c_bind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_unbind_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected c_destroySubcontext_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rename_nns(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_getNameParser_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected a_processJunction_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_processJunction_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected resolve_to_context(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): boolean
                        protected resolve_to_penultimate_context(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): boolean
                        protected resolve_to_penultimate_context_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): boolean
                        protected resolve_to_nns_and_continue(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}