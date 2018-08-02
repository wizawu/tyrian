declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace dir {
                    class ContainmentFilter implements com.sun.jndi.toolkit.dir.AttrFilter {
                        public constructor(arg0: javax.naming.directory.Attributes)
                        public check(arg0: javax.naming.directory.Attributes): boolean
                        public static contains(arg0: javax.naming.directory.Attributes, arg1: javax.naming.directory.Attributes): boolean
                        public static class: java.lang.Class<any>
                    }
                    class ContainmentFilter$$Lambda implements com.sun.jndi.toolkit.dir.AttrFilter {
                        public constructor(arg0: javax.naming.directory.Attributes)
                    }
                }
            }
        }
    }
}