declare namespace java {
    namespace awt {
        namespace peer {
            interface ChoicePeer extends java.awt.peer.ComponentPeer {
                add(arg0: java.lang.String | string, arg1: int): void
                remove(arg0: int): void
                removeAll(): void
                select(arg0: int): void
            }
        }
    }
}