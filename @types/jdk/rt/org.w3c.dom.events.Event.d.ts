declare namespace org {
    namespace w3c {
        namespace dom {
            namespace events {
                interface Event {
                    CAPTURING_PHASE: short
                    AT_TARGET: short
                    BUBBLING_PHASE: short
                    getType(): string
                    getTarget(): org.w3c.dom.events.EventTarget
                    getCurrentTarget(): org.w3c.dom.events.EventTarget
                    getEventPhase(): short
                    getBubbles(): boolean
                    getCancelable(): boolean
                    getTimeStamp(): long
                    stopPropagation(): void
                    preventDefault(): void
                    initEvent(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
                }
            }
        }
    }
}