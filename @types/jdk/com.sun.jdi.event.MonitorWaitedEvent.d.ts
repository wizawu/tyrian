declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {

        interface MonitorWaitedEvent extends com.sun.jdi.event.LocatableEvent {

          thread(): com.sun.jdi.ThreadReference
          monitor(): com.sun.jdi.ObjectReference
          timedout(): boolean
        }

      }
    }
  }
}
