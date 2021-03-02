declare namespace javax {
  namespace naming {
    namespace event {

      interface NamespaceChangeListener extends javax.naming.event.NamingListener {
        objectAdded(arg0: javax.naming.event.NamingEvent): void
        objectRemoved(arg0: javax.naming.event.NamingEvent): void
        objectRenamed(arg0: javax.naming.event.NamingEvent): void
      }

    }
  }
}
