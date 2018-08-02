declare namespace java {
    namespace awt {
        namespace peer {
            interface DialogPeer extends java.awt.peer.WindowPeer {
                setTitle(arg0: java.lang.String | string): void
                setResizable(arg0: boolean): void
                blockWindows(arg0: java.util.List<java.awt.Window>): void
            }
        }
    }
}