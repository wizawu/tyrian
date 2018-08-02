declare namespace sun {
    namespace awt {
        namespace X11 {
class XSystemTrayPeer implements java.awt.peer.SystemTrayPeer , sun.awt.X11.XMSelectionListener {
    public ownerChanged(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long, arg3: long, arg4: long): void
    public ownerDeath(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long): void
    public selectionChanged(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long, arg3: sun.awt.X11.XPropertyEvent): void
    public getTrayIconSize(): java.awt.Dimension
    public static class: java.lang.Class<any>
}

        }
    }
}