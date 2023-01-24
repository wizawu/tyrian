declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface MethodEntryEvent extends com.sun.jdi.event.LocatableEvent {
          method(): com.sun.jdi.Method
        }
      }
    }
  }
}
