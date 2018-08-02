declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace dir {
                    class ContextEnumerator implements javax.naming.NamingEnumeration<javax.naming.Binding> {
                        public constructor(arg0: javax.naming.Context)
                        public constructor(arg0: javax.naming.Context, arg1: int)
                        protected constructor(arg0: javax.naming.Context, arg1: int, arg2: java.lang.String | string, arg3: boolean)
                        protected getImmediateChildren(arg0: javax.naming.Context): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected newEnumerator(arg0: javax.naming.Context, arg1: int, arg2: java.lang.String | string, arg3: boolean): com.sun.jndi.toolkit.dir.ContextEnumerator
                        public hasMore(): boolean
                        public hasMoreElements(): boolean
                        public nextElement(): javax.naming.Binding
                        public next(): javax.naming.Binding
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