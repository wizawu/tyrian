declare namespace com {
  namespace sun {
    namespace jdi {
      namespace request {
        interface ClassUnloadRequest extends com.sun.jdi.request.EventRequest {
          addClassFilter(arg0: java.lang.String | string): void
          addClassExclusionFilter(arg0: java.lang.String | string): void
        }
      }
    }
  }
}
