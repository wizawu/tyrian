declare namespace javax {
    namespace naming {
        namespace directory {
            class InitialDirContext extends javax.naming.InitialContext implements javax.naming.directory.DirContext {
                protected constructor(arg0: boolean)
                public constructor()
                public constructor(arg0: java.util.Hashtable<any, any>)
                public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
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