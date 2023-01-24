declare namespace com {
  namespace sun {
    namespace jdi {
      namespace event {
        interface Event extends com.sun.jdi.Mirror {
          request(): com.sun.jdi.request.EventRequest
        }
      }
    }
  }
}
