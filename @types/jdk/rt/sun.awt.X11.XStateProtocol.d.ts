declare namespace sun {
    namespace awt {
        namespace X11 {
interface XStateProtocol {
    supportsState(arg0: int): boolean
    setState(arg0: sun.awt.X11.XWindowPeer, arg1: int): void
    getState(arg0: sun.awt.X11.XWindowPeer): int
    isStateChange(arg0: sun.awt.X11.XPropertyEvent): boolean
    unshadeKludge(arg0: sun.awt.X11.XWindowPeer): void
}

        }
    }
}