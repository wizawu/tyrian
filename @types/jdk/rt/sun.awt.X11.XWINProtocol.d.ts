declare namespace sun {
    namespace awt {
        namespace X11 {
class XWINProtocol extends sun.awt.X11.XProtocol implements sun.awt.X11.XStateProtocol , sun.awt.X11.XLayerProtocol {
    public supportsState(arg0: int): boolean
    public setState(arg0: sun.awt.X11.XWindowPeer, arg1: int): void
    public getState(arg0: sun.awt.X11.XWindowPeer): int
    public isStateChange(arg0: sun.awt.X11.XPropertyEvent): boolean
    public unshadeKludge(arg0: sun.awt.X11.XWindowPeer): void
    public supportsLayer(arg0: int): boolean
    public setLayer(arg0: sun.awt.X11.XWindowPeer, arg1: int): void
    public static class: java.lang.Class<any>
}

        }
    }
}