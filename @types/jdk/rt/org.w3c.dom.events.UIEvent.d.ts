declare namespace org {
    namespace w3c {
        namespace dom {
            namespace events {
interface UIEvent extends org.w3c.dom.events.Event {
    getView(): org.w3c.dom.views.AbstractView
    getDetail(): int
    initUIEvent(arg0: java.lang.String | string, arg1: boolean, arg2: boolean, arg3: org.w3c.dom.views.AbstractView | org.w3c.dom.views.AbstractView$$Lambda, arg4: int): void
}

            }
        }
    }
}