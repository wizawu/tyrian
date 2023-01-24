declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface ModificationWatchpointEvent extends com.sun.jdi.event.WatchpointEvent {
          valueToBe(): com.sun.jdi.Value
        }
      }
    }
  }
}
