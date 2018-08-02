declare namespace java {
    namespace awt {
        namespace peer {
interface ListPeer extends java.awt.peer.ComponentPeer {
    getSelectedIndexes(): int[]
    add(arg0: java.lang.String | string, arg1: int): void
    delItems(arg0: int, arg1: int): void
    removeAll(): void
    select(arg0: int): void
    deselect(arg0: int): void
    makeVisible(arg0: int): void
    setMultipleMode(arg0: boolean): void
    getPreferredSize(arg0: int): java.awt.Dimension
    getMinimumSize(arg0: int): java.awt.Dimension
}

        }
    }
}