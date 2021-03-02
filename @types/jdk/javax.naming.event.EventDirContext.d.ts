declare namespace javax {
  namespace naming {
    namespace event {

      interface EventDirContext extends javax.naming.event.EventContext, javax.naming.directory.DirContext {
        addNamingListener(arg0: javax.naming.Name, arg1: java.lang.String, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.event.NamingListener): void
        addNamingListener(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.event.NamingListener): void
        addNamingListener(arg0: javax.naming.Name, arg1: java.lang.String, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: javax.naming.event.NamingListener): void
        addNamingListener(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: javax.naming.event.NamingListener): void
      }

    }
  }
}
