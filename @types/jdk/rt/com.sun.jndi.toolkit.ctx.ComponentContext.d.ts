declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace ctx {
abstract class ComponentContext extends com.sun.jndi.toolkit.ctx.PartialCompositeContext {
    protected static USE_CONTINUATION: byte
    protected static TERMINAL_COMPONENT: byte
    protected static TERMINAL_NNS_COMPONENT: byte
    protected constructor()
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
    protected p_parseComponent(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.HeadTail
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
    protected c_processJunction_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_resolveIntermediate(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.HeadTail
    protected isAllEmpty(arg0: javax.naming.Name): boolean
    protected p_resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<any>, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.spi.ResolveResult
    protected p_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
    protected p_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
    protected p_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
    protected p_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
    protected p_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
    protected p_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
    protected p_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}