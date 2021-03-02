declare namespace com {
  namespace sun {
    namespace jdi {
      namespace request {

        interface ClassPrepareRequest extends com.sun.jdi.request.EventRequest {
          addClassFilter(arg0: com.sun.jdi.ReferenceType): void
          addClassFilter(arg0: java.lang.String | string): void
          addClassExclusionFilter(arg0: java.lang.String | string): void
          addSourceNameFilter(arg0: java.lang.String | string): void
        }

      }
    }
  }
}
