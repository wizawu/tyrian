declare namespace org {
  namespace w3c {
    namespace dom {
      namespace events {

        interface EventTarget {

          addEventListener(arg0: java.lang.String, arg1: org.w3c.dom.events.EventListener, arg2: boolean): void
          removeEventListener(arg0: java.lang.String, arg1: org.w3c.dom.events.EventListener, arg2: boolean): void
          dispatchEvent(arg0: org.w3c.dom.events.Event): boolean
        }

      }
    }
  }
}
