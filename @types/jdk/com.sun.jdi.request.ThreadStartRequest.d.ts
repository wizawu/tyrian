declare namespace com {
  namespace sun {
    namespace jdi {
      namespace request {
        interface ThreadStartRequest extends com.sun.jdi.request.EventRequest {
          addThreadFilter(arg0: com.sun.jdi.ThreadReference): void
        }
      }
    }
  }
}
