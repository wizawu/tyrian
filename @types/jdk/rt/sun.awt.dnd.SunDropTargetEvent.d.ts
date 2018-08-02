declare namespace sun {
    namespace awt {
        namespace dnd {
class SunDropTargetEvent extends java.awt.event.MouseEvent {
    public static MOUSE_DROPPED: int
    public constructor(arg0: java.awt.Component, arg1: int, arg2: int, arg3: int, arg4: sun.awt.dnd.SunDropTargetContextPeer$EventDispatcher)
    public dispatch(): void
    public consume(): void
    public getDispatcher(): sun.awt.dnd.SunDropTargetContextPeer$EventDispatcher
    public paramString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}