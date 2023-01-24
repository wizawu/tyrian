declare namespace com {
  namespace sun {
    namespace jdi {
      namespace request {
        interface MonitorContendedEnterRequest extends com.sun.jdi.request.EventRequest {
          addThreadFilter(arg0: com.sun.jdi.ThreadReference): void
          addClassFilter(arg0: com.sun.jdi.ReferenceType): void
          addClassFilter(arg0: java.lang.String | string): void
          addClassExclusionFilter(arg0: java.lang.String | string): void
          addInstanceFilter(arg0: com.sun.jdi.ObjectReference): void
        }
      }
    }
  }
}
