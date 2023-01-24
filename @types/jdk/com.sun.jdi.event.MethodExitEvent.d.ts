declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface MethodExitEvent extends com.sun.jdi.event.LocatableEvent {
          method(): com.sun.jdi.Method
          returnValue(): com.sun.jdi.Value
        }
      }
    }
  }
}
