declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class LdapCtx extends com.sun.jndi.toolkit.ctx.ComponentDirContext implements javax.naming.event.EventDirContext , javax.naming.ldap.LdapContext {
                    public static readonly DEFAULT_PORT: int
                    public static readonly DEFAULT_SSL_PORT: int
                    public static readonly DEFAULT_HOST: string
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.util.Hashtable<any, any>, arg4: boolean)
                    public newInstance(arg0: javax.naming.ldap.Control[]): javax.naming.ldap.LdapContext
                    protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                    protected c_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    protected c_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                    protected c_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                    protected c_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                    protected c_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                    protected c_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                    public getNameInNamespace(): string
                    public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                    protected c_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                    protected c_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    protected c_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    protected c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    protected c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    protected p_getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
                    public getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
                    public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                    public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                    protected finalize(): void
                    public close(): void
                    public reconnect(arg0: javax.naming.ldap.Control[]): void
                    protected processReturnCode(arg0: com.sun.jndi.ldap.LdapResult): void
                    protected processReturnCode(arg0: com.sun.jndi.ldap.LdapResult, arg1: javax.naming.Name, arg2: java.lang.Object, arg3: javax.naming.Name, arg4: java.util.Hashtable<any, any>, arg5: java.lang.String | string): void
                    public static mapErrorCode(arg0: int, arg1: java.lang.String | string): javax.naming.NamingException
                    public extendedOperation(arg0: javax.naming.ldap.ExtendedRequest): javax.naming.ldap.ExtendedResponse
                    public setRequestControls(arg0: javax.naming.ldap.Control[]): void
                    public getRequestControls(): javax.naming.ldap.Control[]
                    public getConnectControls(): javax.naming.ldap.Control[]
                    public getResponseControls(): javax.naming.ldap.Control[]
                    public addNamingListener(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.event.NamingListener): void
                    public removeNamingListener(arg0: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: javax.naming.event.NamingListener): void
                    public targetMustExist(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}