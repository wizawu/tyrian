declare namespace sun {
    namespace awt {
        namespace X11 {
            class XScrollPanePeer extends sun.awt.X11.XComponentPeer implements java.awt.peer.ScrollPanePeer , sun.awt.X11.XScrollbarClient {
                public static MARGIN: int
                public static SCROLLBAR: int
                public static SPACE: int
                public static SCROLLBAR_INSET: int
                public static VERTICAL: int
                public static HORIZONTAL: int
                public getContentWindow(): long
                public setBounds(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int): void
                public getInsets(): java.awt.Insets
                public getHScrollbarHeight(): int
                public getVScrollbarWidth(): int
                public childResized(arg0: int, arg1: int): void
                public setUnitIncrement(arg0: java.awt.Adjustable, arg1: int): void
                public setValue(arg0: java.awt.Adjustable, arg1: int): void
                public setScrollPosition(arg0: int, arg1: int): void
                public repaintScrollbarRequest(arg0: sun.awt.X11.XScrollbar): void
                public handleEvent(arg0: java.awt.AWTEvent): void
                public handleJavaMouseEvent(arg0: java.awt.event.MouseEvent): void
                public notifyValue(arg0: sun.awt.X11.XScrollbar, arg1: int, arg2: int, arg3: boolean): void
                public print(arg0: java.awt.Graphics): void
                public static class: java.lang.Class<any>
            }
        }
    }
}