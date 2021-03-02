declare namespace javax {
  namespace naming {
    namespace event {

      interface EventContext extends javax.naming.Context {
        public static readonly OBJECT_SCOPE: int
        public static readonly ONELEVEL_SCOPE: int
        public static readonly SUBTREE_SCOPE: int
        addNamingListener(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.event.NamingListener): void
        addNamingListener(arg0: java.lang.String, arg1: int, arg2: javax.naming.event.NamingListener): void
        removeNamingListener(arg0: javax.naming.event.NamingListener): void
        targetMustExist(): boolean
      }

    }
  }
}
