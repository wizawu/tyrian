declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace dir {
class HierMemDirCtx implements javax.naming.directory.DirContext {
    protected myEnv: java.util.Hashtable<java.lang.String, java.lang.Object>
    protected bindings: java.util.Hashtable<javax.naming.Name, java.lang.Object>
    protected attrs: javax.naming.directory.Attributes
    protected ignoreCase: boolean
    protected readOnlyEx: javax.naming.NamingException
    protected myParser: javax.naming.NameParser
    public close(): void
    public getNameInNamespace(): string
    public constructor()
    public constructor(arg0: boolean)
    public constructor(arg0: java.util.Hashtable<java.lang.String, java.lang.Object>, arg1: boolean)
    protected constructor(arg0: java.util.Hashtable<java.lang.String, java.lang.Object>, arg1: boolean, arg2: boolean)
    public lookup(arg0: java.lang.String | string): java.lang.Object
    public lookup(arg0: javax.naming.Name): java.lang.Object
    public doLookup(arg0: javax.naming.Name, arg1: boolean): java.lang.Object
    public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
    public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
    public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
    protected doBind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean): void
    protected doBindAux(arg0: javax.naming.Name, arg1: java.lang.Object): void
    public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
    public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
    public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
    protected doRebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean): void
    protected doRebindAux(arg0: javax.naming.Name, arg1: java.lang.Object): void
    public unbind(arg0: java.lang.String | string): void
    public unbind(arg0: javax.naming.Name): void
    protected doUnbind(arg0: javax.naming.Name): void
    public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
    protected doRename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
    public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
    public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
    protected doList(): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
    public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
    public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
    protected doListBindings(arg0: boolean): javax.naming.NamingEnumeration<javax.naming.Binding>
    public destroySubcontext(arg0: java.lang.String | string): void
    public destroySubcontext(arg0: javax.naming.Name): void
    protected doDestroySubcontext(arg0: javax.naming.Name): void
    public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
    public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
    public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
    public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
    protected doCreateSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
    public lookupLink(arg0: java.lang.String | string): java.lang.Object
    public lookupLink(arg0: javax.naming.Name): java.lang.Object
    public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
    public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
    public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
    public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
    public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
    public getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
    public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
    public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
    protected doGetAttributes(): javax.naming.directory.Attributes
    public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
    public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
    protected doGetAttributes(arg0: java.lang.String[]): javax.naming.directory.Attributes
    public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
    public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
    public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
    public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
    protected doModifyAttributes(arg0: javax.naming.directory.ModificationItem[]): void
    protected static applyMods(arg0: javax.naming.directory.ModificationItem[], arg1: javax.naming.directory.Attributes): javax.naming.directory.Attributes
    public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
    protected createNewCtx(): com.sun.jndi.toolkit.dir.HierMemDirCtx
    protected canonizeName(arg0: javax.naming.Name): javax.naming.Name
    protected getInternalName(arg0: javax.naming.Name): javax.naming.Name
    protected getLeafName(arg0: javax.naming.Name): javax.naming.Name
    public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
    public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
    public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
    public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
    public setReadOnly(arg0: javax.naming.NamingException): void
    public setIgnoreCase(arg0: boolean): void
    public setNameParser(arg0: javax.naming.NameParser | javax.naming.NameParser$$Lambda): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}