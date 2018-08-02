declare namespace sun {
    namespace awt {
        namespace X11 {
            class XNETProtocol extends sun.awt.X11.XProtocol implements sun.awt.X11.XStateProtocol , sun.awt.X11.XLayerProtocol {
                public XA_NET_WM_WINDOW_TYPE: sun.awt.X11.XAtom
                public XA_NET_WM_WINDOW_TYPE_NORMAL: sun.awt.X11.XAtom
                public XA_NET_WM_WINDOW_TYPE_DIALOG: sun.awt.X11.XAtom
                public XA_NET_WM_WINDOW_TYPE_UTILITY: sun.awt.X11.XAtom
                public XA_NET_WM_WINDOW_TYPE_POPUP_MENU: sun.awt.X11.XAtom
                public supportsState(arg0: int): boolean
                public setState(arg0: sun.awt.X11.XWindowPeer, arg1: int): void
                public getState(arg0: sun.awt.X11.XWindowPeer): int
                public isStateChange(arg0: sun.awt.X11.XPropertyEvent): boolean
                public unshadeKludge(arg0: sun.awt.X11.XWindowPeer): void
                public supportsLayer(arg0: int): boolean
                public requestState(arg0: sun.awt.X11.XWindow, arg1: sun.awt.X11.XAtom, arg2: boolean): void
                public setLayer(arg0: sun.awt.X11.XWindowPeer, arg1: int): void
                public setActiveWindow(arg0: sun.awt.X11.XWindow): void
                public getWMName(): string
                public setWMIcons(arg0: sun.awt.X11.XWindowPeer, arg1: java.util.List<sun.awt.IconInfo>): void
                public isWMStateNetHidden(arg0: sun.awt.X11.XWindowPeer): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}