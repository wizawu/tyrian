declare namespace java {
    namespace awt {
        namespace peer {
            interface MenuBarPeer extends java.awt.peer.MenuComponentPeer {
                addMenu(arg0: java.awt.Menu): void
                delMenu(arg0: int): void
                addHelpMenu(arg0: java.awt.Menu): void
            }
        }
    }
}