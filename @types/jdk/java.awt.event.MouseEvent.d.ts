declare namespace java {
  namespace awt {
    namespace event {
      class MouseEvent extends java.awt.event.InputEvent {
        public static readonly MOUSE_FIRST: int
        public static readonly MOUSE_LAST: int
        public static readonly MOUSE_CLICKED: int
        public static readonly MOUSE_PRESSED: int
        public static readonly MOUSE_RELEASED: int
        public static readonly MOUSE_MOVED: int
        public static readonly MOUSE_ENTERED: int
        public static readonly MOUSE_EXITED: int
        public static readonly MOUSE_DRAGGED: int
        public static readonly MOUSE_WHEEL: int
        public static readonly NOBUTTON: int
        public static readonly BUTTON1: int
        public static readonly BUTTON2: int
        public static readonly BUTTON3: int
        x: int
        y: int
        clickCount: int
        button: int
        popupTrigger: boolean
        public getLocationOnScreen(): java.awt.Point
        public getXOnScreen(): number
        public getYOnScreen(): number
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: boolean | java.lang.Boolean,
          arg8: number | java.lang.Integer
        )
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: boolean | java.lang.Boolean
        )
        public getModifiersEx(): number
        public constructor(
          arg0: java.awt.Component,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Integer,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: number | java.lang.Integer,
          arg7: number | java.lang.Integer,
          arg8: number | java.lang.Integer,
          arg9: boolean | java.lang.Boolean,
          arg10: number | java.lang.Integer
        )
        public getX(): number
        public getY(): number
        public getPoint(): java.awt.Point
        public translatePoint(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        public getClickCount(): number
        public getButton(): number
        public isPopupTrigger(): boolean
        public static getMouseModifiersText(arg0: number | java.lang.Integer): java.lang.String
        public paramString(): java.lang.String
      }
    }
  }
}
