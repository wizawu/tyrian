declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace dir {
                    class LazySearchEnumerationImpl implements javax.naming.NamingEnumeration<javax.naming.directory.SearchResult> {
                        public constructor(arg0: javax.naming.NamingEnumeration<javax.naming.Binding>, arg1: com.sun.jndi.toolkit.dir.AttrFilter | com.sun.jndi.toolkit.dir.AttrFilter$$Lambda, arg2: javax.naming.directory.SearchControls)
                        public constructor(arg0: javax.naming.NamingEnumeration<javax.naming.Binding>, arg1: com.sun.jndi.toolkit.dir.AttrFilter | com.sun.jndi.toolkit.dir.AttrFilter$$Lambda, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.Context, arg4: java.util.Hashtable<java.lang.String, java.lang.Object>, arg5: boolean)
                        public constructor(arg0: javax.naming.NamingEnumeration<javax.naming.Binding>, arg1: com.sun.jndi.toolkit.dir.AttrFilter | com.sun.jndi.toolkit.dir.AttrFilter$$Lambda, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.Context, arg4: java.util.Hashtable<java.lang.String, java.lang.Object>)
                        public hasMore(): boolean
                        public hasMoreElements(): boolean
                        public nextElement(): javax.naming.directory.SearchResult
                        public next(): javax.naming.directory.SearchResult
                        public close(): void
                        public next(): java.lang.Object
                        public nextElement(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}