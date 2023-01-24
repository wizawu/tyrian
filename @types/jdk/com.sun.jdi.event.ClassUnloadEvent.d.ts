declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface ClassUnloadEvent extends com.sun.jdi.event.Event {
          className(): java.lang.String
          classSignature(): java.lang.String
        }
      }
    }
  }
}
