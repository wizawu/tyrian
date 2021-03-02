declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {

        interface EventQueue extends com.sun.jdi.Mirror {
          remove(): com.sun.jdi.event.EventSet
          remove(arg0: long): com.sun.jdi.event.EventSet
        }

      }
    }
  }
}
