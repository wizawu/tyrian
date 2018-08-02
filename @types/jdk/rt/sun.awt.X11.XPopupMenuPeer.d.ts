declare namespace sun {
    namespace awt {
        namespace X11 {
            class XPopupMenuPeer extends sun.awt.X11.XMenuWindow implements java.awt.peer.PopupMenuPeer {
                public setFont(arg0: java.awt.Font): void
                public setLabel(arg0: java.lang.String | string): void
                public setEnabled(arg0: boolean): void
                public enable(): void
                public disable(): void
                public addSeparator(): void
                public show(arg0: java.awt.Event): void
                protected getWindowBounds(arg0: java.awt.Point, arg1: java.awt.Dimension): java.awt.Rectangle
                protected getCaptionSize(): java.awt.Dimension
                protected paintCaption(arg0: java.awt.Graphics, arg1: java.awt.Rectangle): void
                protected doDispose(): void
                protected handleEvent(arg0: java.awt.AWTEvent): void
                public handleKeyPress(arg0: sun.awt.X11.XEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}