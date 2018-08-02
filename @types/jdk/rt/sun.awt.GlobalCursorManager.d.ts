declare namespace sun {
    namespace awt {
        abstract class GlobalCursorManager {
            public updateCursorImmediately(): void
            public updateCursorImmediately(arg0: java.awt.event.InputEvent): void
            public updateCursorLater(arg0: java.awt.Component): void
            protected constructor()
            protected setCursor(arg0: java.awt.Component, arg1: java.awt.Cursor, arg2: boolean): void
            protected getCursorPos(arg0: java.awt.Point): void
            protected getLocationOnScreen(arg0: java.awt.Component): java.awt.Point
            protected findHeavyweightUnderCursor(arg0: boolean): java.awt.Component
            protected updateCursorOutOfJava(): void
            public static class: java.lang.Class<any>
        }
    }
}