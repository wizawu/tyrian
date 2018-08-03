declare namespace java {
    namespace awt {
        namespace event {
            class WindowEvent extends java.awt.event.ComponentEvent {
                public static WINDOW_FIRST: int
                public static WINDOW_OPENED: int
                public static WINDOW_CLOSING: int
                public static WINDOW_CLOSED: int
                public static WINDOW_ICONIFIED: int
                public static WINDOW_DEICONIFIED: int
                public static WINDOW_ACTIVATED: int
                public static WINDOW_DEACTIVATED: int
                public static WINDOW_GAINED_FOCUS: int
                public static WINDOW_LOST_FOCUS: int
                public static WINDOW_STATE_CHANGED: int
                public static WINDOW_LAST: int
                public constructor(arg0: java.awt.Window, arg1: int, arg2: java.awt.Window, arg3: int, arg4: int)
                public constructor(arg0: java.awt.Window, arg1: int, arg2: java.awt.Window)
                public constructor(arg0: java.awt.Window, arg1: int, arg2: int, arg3: int)
                public constructor(arg0: java.awt.Window, arg1: int)
                public getWindow(): java.awt.Window
                public getOppositeWindow(): java.awt.Window
                public getOldState(): int
                public getNewState(): int
                public paramString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}