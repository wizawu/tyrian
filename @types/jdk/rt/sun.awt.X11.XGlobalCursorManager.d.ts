declare namespace sun {
    namespace awt {
        namespace X11 {
class XGlobalCursorManager extends sun.awt.GlobalCursorManager {
    public constructor()
    protected setCursor(arg0: java.awt.Component, arg1: java.awt.Cursor, arg2: boolean): void
    protected updateCursorOutOfJava(): void
    protected getCursorPos(arg0: java.awt.Point): void
    protected findHeavyweightUnderCursor(): java.awt.Component
    protected getLocationOnScreen(arg0: java.awt.Component): java.awt.Point
    protected findHeavyweightUnderCursor(arg0: boolean): java.awt.Component
    public static class: java.lang.Class<any>
}

        }
    }
}