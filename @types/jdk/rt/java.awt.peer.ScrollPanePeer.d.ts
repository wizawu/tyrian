declare namespace java {
    namespace awt {
        namespace peer {
interface ScrollPanePeer extends java.awt.peer.ContainerPeer {
    getHScrollbarHeight(): int
    getVScrollbarWidth(): int
    setScrollPosition(arg0: int, arg1: int): void
    childResized(arg0: int, arg1: int): void
    setUnitIncrement(arg0: java.awt.Adjustable, arg1: int): void
    setValue(arg0: java.awt.Adjustable, arg1: int): void
}

        }
    }
}