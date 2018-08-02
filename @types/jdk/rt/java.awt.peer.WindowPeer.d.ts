declare namespace java {
    namespace awt {
        namespace peer {
interface WindowPeer extends java.awt.peer.ContainerPeer {
    toFront(): void
    toBack(): void
    updateAlwaysOnTopState(): void
    updateFocusableWindowState(): void
    setModalBlocked(arg0: java.awt.Dialog, arg1: boolean): void
    updateMinimumSize(): void
    updateIconImages(): void
    setOpacity(arg0: float): void
    setOpaque(arg0: boolean): void
    updateWindow(): void
    repositionSecurityWarning(): void
}

        }
    }
}