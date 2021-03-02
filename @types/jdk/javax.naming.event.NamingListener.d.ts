declare namespace javax {
  namespace naming {
    namespace event {

      interface NamingListener$$lambda {
        (arg0: javax.naming.event.NamingExceptionEvent): void
      }

      interface NamingListener extends java.util.EventListener {
        namingExceptionThrown(arg0: javax.naming.event.NamingExceptionEvent): void
      }

    }
  }
}
