declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace ctx {
                    abstract class PartialCompositeDirContext extends com.sun.jndi.toolkit.ctx.AtomicContext implements javax.naming.directory.DirContext {
                        protected constructor()
                        protected p_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected p_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected p_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected p_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
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
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        protected static getPCDirContext(arg0: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.PartialCompositeDirContext
                        protected c_parseComponent(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.StringHeadTail
                        protected a_lookup(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_lookupLink(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_list(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected a_listBindings(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected a_bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_unbind(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_destroySubcontext(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_createSubcontext(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected a_rename(arg0: java.lang.String | string, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_getNameParser(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}