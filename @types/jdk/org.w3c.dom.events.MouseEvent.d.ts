declare namespace org {
  namespace w3c {
    namespace dom {
      namespace events {

        interface MouseEvent extends org.w3c.dom.events.UIEvent {
          getScreenX(): number
          getScreenY(): number
          getClientX(): number
          getClientY(): number
          getCtrlKey(): boolean
          getShiftKey(): boolean
          getAltKey(): boolean
          getMetaKey(): boolean
          getButton(): number
          getRelatedTarget(): org.w3c.dom.events.EventTarget
          initMouseEvent(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean, arg2: boolean | java.lang.Boolean, arg3: org.w3c.dom.views.AbstractView | org.w3c.dom.views.AbstractView$$lambda, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer, arg6: number | java.lang.Integer, arg7: number | java.lang.Integer, arg8: number | java.lang.Integer, arg9: boolean | java.lang.Boolean, arg10: boolean | java.lang.Boolean, arg11: boolean | java.lang.Boolean, arg12: boolean | java.lang.Boolean, arg13: number | java.lang.Short, arg14: org.w3c.dom.events.EventTarget): void
        }

      }
    }
  }
}
