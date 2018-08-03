declare namespace javax {
    namespace naming {
        namespace event {
            interface EventContext extends javax.naming.Context {
                OBJECT_SCOPE: int
                ONELEVEL_SCOPE: int
                SUBTREE_SCOPE: int
                addNamingListener(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.event.NamingListener | javax.naming.event.NamingListener$$Lambda): void
                addNamingListener(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.event.NamingListener | javax.naming.event.NamingListener$$Lambda): void
                removeNamingListener(arg0: javax.naming.event.NamingListener | javax.naming.event.NamingListener$$Lambda): void
                targetMustExist(): boolean
            }
        }
    }
}