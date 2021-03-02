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
        public getXOnScreen(): int
        public getYOnScreen(): int
        public constructor(arg0: java.awt.Component, arg1: int, arg2: long, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean, arg8: int)
        public constructor(arg0: java.awt.Component, arg1: int, arg2: long, arg3: int, arg4: int, arg5: int, arg6: int, arg7: boolean)
        public getModifiersEx(): int
        public constructor(arg0: java.awt.Component, arg1: int, arg2: long, arg3: int, arg4: int, arg5: int, arg6: int, arg7: int, arg8: int, arg9: boolean, arg10: int)
        public getX(): int
        public getY(): int
        public getPoint(): java.awt.Point
        public translatePoint(arg0: int, arg1: int): void
        public getClickCount(): int
        public getButton(): int
        public isPopupTrigger(): boolean
        public static getMouseModifiersText(arg0: int): java.lang.String
        public paramString(): java.lang.String
      }

    }
  }
}
