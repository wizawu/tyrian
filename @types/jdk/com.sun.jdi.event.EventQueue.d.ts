declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface EventQueue extends com.sun.jdi.Mirror {
          remove(): com.sun.jdi.event.EventSet
          remove(arg0: number | java.lang.Long): com.sun.jdi.event.EventSet
        }
      }
    }
  }
}
