declare namespace com {
    namespace sun {
        namespace jndi {
            namespace dns {
                class DnsContext extends com.sun.jndi.toolkit.ctx.ComponentDirContext {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.util.Hashtable<any, any>)
                    public close(): void
                    protected p_getEnvironment(): java.util.Hashtable<any, any>
                    public getEnvironment(): java.util.Hashtable<any, any>
                    public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                    public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                    public c_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                    public c_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                    public c_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                    public c_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                    public c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                    public c_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                    public c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    public c_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                    public c_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public c_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    public c_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    public getNameInNamespace(): string
                    public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}