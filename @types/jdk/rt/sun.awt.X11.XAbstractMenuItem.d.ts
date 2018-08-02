declare namespace sun {
    namespace awt {
        namespace X11 {
interface XAbstractMenuItem {
    getWidth(arg0: java.awt.Graphics): int
    getShortcutWidth(arg0: java.awt.Graphics): int
    getLabel(): string
    getHeight(arg0: java.awt.Graphics): int
    paint(arg0: java.awt.Graphics, arg1: int, arg2: int, arg3: int, arg4: int, arg5: boolean): void
    setMenuPeer(arg0: sun.awt.X11.XMenuPeer): void
}

        }
    }
}