declare namespace sun {
    namespace awt {
        namespace X11 {
            class XAWTXSettings extends sun.awt.XSettings implements sun.awt.X11.XMSelectionListener {
                public static MAX_LENGTH: long
                public constructor()
                public ownerDeath(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long): void
                public ownerChanged(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long, arg3: long, arg4: long): void
                public selectionChanged(arg0: int, arg1: sun.awt.X11.XMSelection, arg2: long, arg3: sun.awt.X11.XPropertyEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}