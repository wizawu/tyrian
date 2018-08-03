declare namespace javax {
    namespace naming {
        namespace event {
            interface ObjectChangeListener extends javax.naming.event.NamingListener {
                objectChanged(arg0: javax.naming.event.NamingEvent): void
            }
            interface ObjectChangeListener$$Lambda extends javax.naming.event.NamingListener {
                (arg0: javax.naming.event.NamingEvent): void
            }
        }
    }
}