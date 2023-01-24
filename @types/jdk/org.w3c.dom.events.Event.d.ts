declare namespace org {
  namespace w3c {
    namespace dom {
      namespace events {
        interface Event {
          readonly CAPTURING_PHASE: short
          readonly AT_TARGET: short
          readonly BUBBLING_PHASE: short
          getType(): java.lang.String
          getTarget(): org.w3c.dom.events.EventTarget
          getCurrentTarget(): org.w3c.dom.events.EventTarget
          getEventPhase(): number
          getBubbles(): boolean
          getCancelable(): boolean
          getTimeStamp(): number
          stopPropagation(): void
          preventDefault(): void
          initEvent(
            arg0: java.lang.String | string,
            arg1: boolean | java.lang.Boolean,
            arg2: boolean | java.lang.Boolean
          ): void
        }
      }
    }
  }
}
