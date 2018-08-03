declare namespace sun {
    namespace awt {
        namespace X11 {
            class XMenuBarPeer extends sun.awt.X11.XBaseMenuWindow implements java.awt.peer.MenuBarPeer {
                public setFont(arg0: java.awt.Font): void
                public addMenu(arg0: java.awt.Menu): void
                public delMenu(arg0: int): void
                public addHelpMenu(arg0: java.awt.Menu): void
                public init(arg0: java.awt.Frame): void
                protected getParentMenuWindow(): sun.awt.X11.XBaseMenuWindow
                protected map(): sun.awt.X11.XMenuBarPeer$MappingData
                protected getSubmenuBounds(arg0: java.awt.Rectangle, arg1: java.awt.Dimension): java.awt.Rectangle
                protected updateSize(): void
                protected doDispose(): void
                public reshape(arg0: int, arg1: int, arg2: int, arg3: int): void
                public paintPeer(arg0: java.awt.Graphics): void
                protected handleEvent(arg0: java.awt.AWTEvent): void
                public handleKeyPress(arg0: sun.awt.X11.XEvent): void
                protected map(): sun.awt.X11.XBaseMenuWindow$MappingData
                public static class: java.lang.Class<any>
            }
        }
    }
}