declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface VMStartEvent extends com.sun.jdi.event.Event {
          thread(): com.sun.jdi.ThreadReference
        }
      }
    }
  }
}
