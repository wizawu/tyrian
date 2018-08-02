declare namespace sun {
    namespace awt {
        interface AWTAccessor$MenuComponentAccessor {
            getAppContext(arg0: java.awt.MenuComponent): sun.awt.AppContext
            setAppContext(arg0: java.awt.MenuComponent, arg1: sun.awt.AppContext): void
            getParent(arg0: java.awt.MenuComponent): java.awt.MenuContainer
            getFont_NoClientCode(arg0: java.awt.MenuComponent): java.awt.Font
            getPeer<T extends java.awt.peer.MenuComponentPeer>(arg0: java.awt.MenuComponent): T
        }
    }
}