declare namespace org {
  namespace w3c {
    namespace dom {
      namespace events {

        interface Event {
          public static readonly CAPTURING_PHASE: short
          public static readonly AT_TARGET: short
          public static readonly BUBBLING_PHASE: short
          getType(): java.lang.String
          getTarget(): org.w3c.dom.events.EventTarget
          getCurrentTarget(): org.w3c.dom.events.EventTarget
          getEventPhase(): short
          getBubbles(): boolean
          getCancelable(): boolean
          getTimeStamp(): long
          stopPropagation(): void
          preventDefault(): void
          initEvent(arg0: java.lang.String, arg1: boolean, arg2: boolean): void
        }

      }
    }
  }
}
