declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {

        interface ExceptionEvent extends com.sun.jdi.event.LocatableEvent {

          exception(): com.sun.jdi.ObjectReference
          catchLocation(): com.sun.jdi.Location
        }

      }
    }
  }
}
