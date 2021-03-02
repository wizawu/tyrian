declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {

        interface LocatableEvent extends com.sun.jdi.event.Event, com.sun.jdi.Locatable {
          thread(): com.sun.jdi.ThreadReference
        }

      }
    }
  }
}
