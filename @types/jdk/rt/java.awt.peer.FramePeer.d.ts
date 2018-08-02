declare namespace java {
    namespace awt {
        namespace peer {
            interface FramePeer extends java.awt.peer.WindowPeer {
                setTitle(arg0: java.lang.String | string): void
                setMenuBar(arg0: java.awt.MenuBar | java.awt.MenuBar$$Lambda): void
                setResizable(arg0: boolean): void
                setState(arg0: int): void
                getState(): int
                setMaximizedBounds(arg0: java.awt.Rectangle): void
                setBoundsPrivate(arg0: int, arg1: int, arg2: int, arg3: int): void
                getBoundsPrivate(): java.awt.Rectangle
                emulateActivation(arg0: boolean): void
            }
        }
    }
}