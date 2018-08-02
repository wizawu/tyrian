declare namespace sun {
    namespace awt {
        namespace X11 {
            interface XModalityProtocol {
                setModal(arg0: sun.awt.X11.XDialogPeer, arg1: boolean): boolean
                isBlocked(arg0: sun.awt.X11.XDialogPeer, arg1: sun.awt.X11.XWindowPeer): boolean
            }
        }
    }
}