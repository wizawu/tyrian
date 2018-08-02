declare namespace org {
    namespace w3c {
        namespace dom {
            namespace events {
                interface MouseEvent extends org.w3c.dom.events.UIEvent {
                    getScreenX(): int
                    getScreenY(): int
                    getClientX(): int
                    getClientY(): int
                    getCtrlKey(): boolean
                    getShiftKey(): boolean
                    getAltKey(): boolean
                    getMetaKey(): boolean
                    getButton(): short
                    getRelatedTarget(): org.w3c.dom.events.EventTarget
                    initMouseEvent(arg0: java.lang.String | string, arg1: boolean, arg2: boolean, arg3: org.w3c.dom.views.AbstractView | org.w3c.dom.views.AbstractView$$Lambda, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: boolean, arg10: boolean, arg11: boolean, arg12: boolean, arg13: short, arg14: org.w3c.dom.events.EventTarget): void
                }
            }
        }
    }
}