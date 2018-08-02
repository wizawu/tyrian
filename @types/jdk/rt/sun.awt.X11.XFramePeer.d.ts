declare namespace sun {
    namespace awt {
        namespace X11 {
            class XFramePeer extends sun.awt.X11.XDecoratedPeer implements java.awt.peer.FramePeer {
                public setMenuBar(arg0: java.awt.MenuBar | java.awt.MenuBar$$Lambda): void
                public setMaximizedBounds(arg0: java.awt.Rectangle): void
                public getState(): int
                public setState(arg0: int): void
                public handlePropertyNotify(arg0: sun.awt.X11.XEvent): void
                public handleStateChange(arg0: int, arg1: int): void
                public setVisible(arg0: boolean): void
                public dispose(): void
                public print(arg0: java.awt.Graphics): void
                public setBoundsPrivate(arg0: int, arg1: int, arg2: int, arg3: int): void
                public getBoundsPrivate(): java.awt.Rectangle
                public emulateActivation(arg0: boolean): void
                public static class: java.lang.Class<any>
            }
        }
    }
}