declare namespace java {
    namespace awt {
        namespace peer {
interface ContainerPeer extends java.awt.peer.ComponentPeer {
    getInsets(): java.awt.Insets
    beginValidate(): void
    endValidate(): void
    beginLayout(): void
    endLayout(): void
}

        }
    }
}