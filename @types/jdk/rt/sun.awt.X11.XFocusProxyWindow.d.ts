declare namespace sun {
    namespace awt {
        namespace X11 {
class XFocusProxyWindow extends sun.awt.X11.XBaseWindow {
    public constructor(arg0: sun.awt.X11.XWindowPeer)
    public postInit(arg0: sun.awt.X11.XCreateWindowParams): void
    protected getWMName(): string
    protected getWMClass(): java.lang.String[]
    public getOwner(): sun.awt.X11.XWindowPeer
    public dispatchEvent(arg0: sun.awt.X11.XEvent): void
    public handleFocusEvent(arg0: sun.awt.X11.XEvent): void
    public handleKeyPress(arg0: sun.awt.X11.XEvent): void
    public handleKeyRelease(arg0: sun.awt.X11.XEvent): void
    public static class: java.lang.Class<any>
}

        }
    }
}