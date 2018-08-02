declare namespace sun {
    namespace awt {
        class EmbeddedFrame$NullEmbeddedFramePeer extends sun.awt.NullComponentPeer implements java.awt.peer.FramePeer {
            public setTitle(arg0: java.lang.String | string): void
            public setIconImage(arg0: java.awt.Image): void
            public updateIconImages(): void
            public setMenuBar(arg0: java.awt.MenuBar | java.awt.MenuBar$$Lambda): void
            public setResizable(arg0: boolean): void
            public setState(arg0: int): void
            public getState(): int
            public setMaximizedBounds(arg0: java.awt.Rectangle): void
            public toFront(): void
            public toBack(): void
            public updateFocusableWindowState(): void
            public updateAlwaysOnTop(): void
            public updateAlwaysOnTopState(): void
            public getGlobalHeavyweightFocusOwner(): java.awt.Component
            public setBoundsPrivate(arg0: int, arg1: int, arg2: int, arg3: int): void
            public getBoundsPrivate(): java.awt.Rectangle
            public setModalBlocked(arg0: java.awt.Dialog, arg1: boolean): void
            public restack(): void
            public isRestackSupported(): boolean
            public requestWindowFocus(): boolean
            public updateMinimumSize(): void
            public setOpacity(arg0: float): void
            public setOpaque(arg0: boolean): void
            public updateWindow(): void
            public repositionSecurityWarning(): void
            public emulateActivation(arg0: boolean): void
            public static class: java.lang.Class<any>
        }
    }
}