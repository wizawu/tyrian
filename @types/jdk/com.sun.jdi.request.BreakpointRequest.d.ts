declare namespace com {
  namespace sun {
    namespace jdi {
      namespace request {

        interface BreakpointRequest extends com.sun.jdi.request.EventRequest, com.sun.jdi.Locatable {
          location(): com.sun.jdi.Location
          addThreadFilter(arg0: com.sun.jdi.ThreadReference): void
          addInstanceFilter(arg0: com.sun.jdi.ObjectReference): void
        }

      }
    }
  }
}
