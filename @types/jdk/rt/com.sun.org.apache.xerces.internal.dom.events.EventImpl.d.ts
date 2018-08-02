declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
                            namespace events {
class EventImpl implements org.w3c.dom.events.Event {
    public type: string
    public target: org.w3c.dom.events.EventTarget
    public currentTarget: org.w3c.dom.events.EventTarget
    public eventPhase: short
    public initialized: boolean
    public bubbles: boolean
    public cancelable: boolean
    public stopPropagation: boolean
    public preventDefault: boolean
    protected timeStamp: long
    public constructor()
    public initEvent(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
    public getBubbles(): boolean
    public getCancelable(): boolean
    public getCurrentTarget(): org.w3c.dom.events.EventTarget
    public getEventPhase(): short
    public getTarget(): org.w3c.dom.events.EventTarget
    public getType(): string
    public getTimeStamp(): long
    public stopPropagation(): void
    public preventDefault(): void
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}