declare namespace java {
    namespace awt {
        namespace event {
            class MouseEvent extends java.awt.event.InputEvent {
                public static MOUSE_FIRST: int
                public static MOUSE_LAST: int
                public static MOUSE_CLICKED: int
                public static MOUSE_PRESSED: int
                public static MOUSE_RELEASED: int
                public static MOUSE_MOVED: int
                public static MOUSE_ENTERED: int
                public static MOUSE_EXITED: int
                public static MOUSE_DRAGGED: int
                public static MOUSE_WHEEL: int
                public static NOBUTTON: int
                public static BUTTON1: int
                public static BUTTON2: int
                public static BUTTON3: int
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
                public static getMouseModifiersText(arg0: int): string
                public paramString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}