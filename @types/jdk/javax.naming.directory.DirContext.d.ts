declare namespace javax {
  namespace naming {
    namespace directory {

      interface DirContext extends javax.naming.Context {
        public static readonly ADD_ATTRIBUTE: int
        public static readonly REPLACE_ATTRIBUTE: int
        public static readonly REMOVE_ATTRIBUTE: int
        getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
        getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
        getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[] | string[]): javax.naming.directory.Attributes
        getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[] | string[]): javax.naming.directory.Attributes
        modifyAttributes(arg0: javax.naming.Name, arg1: number | java.lang.Integer, arg2: javax.naming.directory.Attributes): void
        modifyAttributes(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: javax.naming.directory.Attributes): void
        modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
        modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
        bind(arg0: javax.naming.Name, arg1: java.lang.Object | any, arg2: javax.naming.directory.Attributes): void
        bind(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: javax.naming.directory.Attributes): void
        rebind(arg0: javax.naming.Name, arg1: java.lang.Object | any, arg2: javax.naming.directory.Attributes): void
        rebind(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: javax.naming.directory.Attributes): void
        createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
        createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
        getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
        getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
        getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
        getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
        search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[] | string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
        search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[] | string[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
        search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
        search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
        search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
        search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
        search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[] | any[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
        search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[] | any[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
      }

    }
  }
}
