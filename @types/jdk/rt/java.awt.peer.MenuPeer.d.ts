declare namespace java {
    namespace awt {
        namespace peer {
            interface MenuPeer extends java.awt.peer.MenuItemPeer {
                addSeparator(): void
                addItem(arg0: java.awt.MenuItem): void
                delItem(arg0: int): void
            }
        }
    }
}