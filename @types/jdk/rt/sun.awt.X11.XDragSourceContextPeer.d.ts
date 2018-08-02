declare namespace sun {
    namespace awt {
        namespace X11 {
class XDragSourceContextPeer extends sun.awt.dnd.SunDragSourceContextPeer implements sun.awt.X11.XDragSourceProtocolListener {
    protected startDrag(arg0: java.awt.datatransfer.Transferable, arg1: long[], arg2: java.util.Map): void
    public getProxyModeSourceWindow(): long
    public static setProxyModeSourceWindow(arg0: long): void
    public setCursor(arg0: java.awt.Cursor): void
    protected setNativeCursor(arg0: long, arg1: java.awt.Cursor, arg2: int): void
    protected needsBogusExitBeforeDrop(): boolean
    public cleanup(arg0: long): void
    public handleDragReply(arg0: int): void
    public handleDragReply(arg0: int, arg1: int, arg2: int): void
    public handleDragReply(arg0: int, arg1: int, arg2: int, arg3: int): void
    public handleDragFinished(): void
    public handleDragFinished(arg0: boolean): void
    public handleDragFinished(arg0: boolean, arg1: int): void
    public handleDragFinished(arg0: boolean, arg1: int, arg2: int, arg3: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}