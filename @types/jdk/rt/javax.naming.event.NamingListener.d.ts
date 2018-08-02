declare namespace javax {
    namespace naming {
        namespace event {
            interface NamingListener extends java.util.EventListener {
                namingExceptionThrown(arg0: javax.naming.event.NamingExceptionEvent): void
            }
        }
    }
}