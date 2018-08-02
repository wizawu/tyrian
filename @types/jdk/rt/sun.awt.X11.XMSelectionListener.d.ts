declare namespace sun {
    namespace awt {
        namespace X11 {
            interface XMSelectionListener {
                ownerChanged(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long, arg3: long, arg4: long): void
                ownerDeath(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long): void
                selectionChanged(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long, arg3: sun.awt.X11.XPropertyEvent): void
            }
        }
    }
}