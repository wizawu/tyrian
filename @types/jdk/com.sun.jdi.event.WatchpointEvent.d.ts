declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface WatchpointEvent extends com.sun.jdi.event.LocatableEvent {
          field(): com.sun.jdi.Field
          object(): com.sun.jdi.ObjectReference
          valueCurrent(): com.sun.jdi.Value
        }
      }
    }
  }
}
