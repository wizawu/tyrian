declare namespace javax {
  namespace naming {
    namespace event {
      interface EventContext extends javax.naming.Context {
        readonly OBJECT_SCOPE: int
        readonly ONELEVEL_SCOPE: int
        readonly SUBTREE_SCOPE: int
        addNamingListener(
          arg0: javax.naming.Name,
          arg1: number | java.lang.Integer,
          arg2: javax.naming.event.NamingListener | javax.naming.event.NamingListener$$lambda
        ): void
        addNamingListener(
          arg0: java.lang.String | string,
          arg1: number | java.lang.Integer,
          arg2: javax.naming.event.NamingListener | javax.naming.event.NamingListener$$lambda
        ): void
        removeNamingListener(arg0: javax.naming.event.NamingListener | javax.naming.event.NamingListener$$lambda): void
        targetMustExist(): boolean
      }
    }
  }
}
