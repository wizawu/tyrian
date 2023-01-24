declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface ClassPrepareEvent extends com.sun.jdi.event.Event {
          thread(): com.sun.jdi.ThreadReference
          referenceType(): com.sun.jdi.ReferenceType
        }
      }
    }
  }
}
