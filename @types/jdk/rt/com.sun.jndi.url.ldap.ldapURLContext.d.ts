declare namespace com {
    namespace sun {
        namespace jndi {
            namespace url {
                namespace ldap {
class ldapURLContext extends com.sun.jndi.toolkit.url.GenericURLDirContext {
    protected getRootURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ResolveResult
    protected getURLSuffix(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.naming.Name
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
    public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
    public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
    public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
    public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
    public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
    public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
    public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
    public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
    public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
    public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
    public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
    public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
    public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
    public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
    public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
    public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
    public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
    public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
    public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}