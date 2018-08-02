declare namespace java {
    namespace awt {
        namespace peer {
            interface TrayIconPeer {
                dispose(): void
                setToolTip(arg0: java.lang.String | string): void
                updateImage(): void
                displayMessage(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                showPopupMenu(arg0: int, arg1: int): void
            }
        }
    }
}