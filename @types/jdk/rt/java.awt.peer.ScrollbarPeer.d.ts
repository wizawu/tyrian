declare namespace java {
    namespace awt {
        namespace peer {
            interface ScrollbarPeer extends java.awt.peer.ComponentPeer {
                setValues(arg0: int, arg1: int, arg2: int, arg3: int): void
                setLineIncrement(arg0: int): void
                setPageIncrement(arg0: int): void
            }
        }
    }
}