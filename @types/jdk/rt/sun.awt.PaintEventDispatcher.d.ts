declare namespace sun {
    namespace awt {
class PaintEventDispatcher {
    public constructor()
    public static setPaintEventDispatcher(arg0: sun.awt.PaintEventDispatcher): void
    public static getPaintEventDispatcher(): sun.awt.PaintEventDispatcher
    public createPaintEvent(arg0: java.awt.Component, arg1: int, arg2: int, arg3: int, arg4: int): java.awt.event.PaintEvent
    public shouldDoNativeBackgroundErase(arg0: java.awt.Component): boolean
    public queueSurfaceDataReplacing(arg0: java.awt.Component, arg1: java.lang.Runnable | java.lang.Runnable$$Lambda): boolean
    public static class: java.lang.Class<any>
}

    }
}