declare namespace org {
  namespace w3c {
    namespace dom {
      namespace events {
        interface EventTarget {
          addEventListener(
            arg0: java.lang.String | string,
            arg1: org.w3c.dom.events.EventListener | org.w3c.dom.events.EventListener$$lambda,
            arg2: boolean | java.lang.Boolean
          ): void
          removeEventListener(
            arg0: java.lang.String | string,
            arg1: org.w3c.dom.events.EventListener | org.w3c.dom.events.EventListener$$lambda,
            arg2: boolean | java.lang.Boolean
          ): void
          dispatchEvent(arg0: org.w3c.dom.events.Event): boolean
        }
      }
    }
  }
}
