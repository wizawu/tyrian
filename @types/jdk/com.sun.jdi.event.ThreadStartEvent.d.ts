declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {

        interface ThreadStartEvent extends com.sun.jdi.event.Event {
          thread(): com.sun.jdi.ThreadReference
        }

      }
    }
  }
}
