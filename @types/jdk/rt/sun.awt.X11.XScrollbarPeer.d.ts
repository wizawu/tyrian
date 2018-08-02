declare namespace sun {
    namespace awt {
        namespace X11 {
class XScrollbarPeer extends sun.awt.X11.XComponentPeer implements java.awt.peer.ScrollbarPeer , sun.awt.X11.XScrollbarClient {
    public preInit(arg0: sun.awt.X11.XCreateWindowParams): void
    public getMinimumSize(): java.awt.Dimension
    public repaintScrollbarRequest(arg0: sun.awt.X11.XScrollbar): void
    public notifyValue(arg0: sun.awt.X11.XScrollbar, arg1: int, arg2: int, arg3: boolean): void
    public handleJavaMouseEvent(arg0: java.awt.event.MouseEvent): void
    public handleJavaKeyEvent(arg0: java.awt.event.KeyEvent): void
    public setValue(arg0: int): void
    public setValues(arg0: int, arg1: int, arg2: int, arg3: int): void
    public setLineIncrement(arg0: int): void
    public setPageIncrement(arg0: int): void
    public layout(): void
    public static class: java.lang.Class<any>
}

        }
    }
}