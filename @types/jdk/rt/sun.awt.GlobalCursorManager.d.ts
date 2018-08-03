declare namespace sun {
    namespace awt {
        abstract class GlobalCursorManager {
            public updateCursorImmediately(): void
            public updateCursorImmediately(arg0: java.awt.event.InputEvent): void
            public updateCursorLater(arg0: java.awt.Component): void
            protected constructor()
            protected abstract setCursor(arg0: java.awt.Component, arg1: java.awt.Cursor, arg2: boolean): void
            protected abstract getCursorPos(arg0: java.awt.Point): void
            protected abstract getLocationOnScreen(arg0: java.awt.Component): java.awt.Point
            protected abstract findHeavyweightUnderCursor(arg0: boolean): java.awt.Component
            protected updateCursorOutOfJava(): void
            public static class: java.lang.Class<any>
        }
    }
}