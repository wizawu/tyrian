declare namespace sun {
    namespace awt {
        namespace X11 {
class XListPeer extends sun.awt.X11.XComponentPeer implements java.awt.peer.ListPeer , sun.awt.X11.XScrollbarClient {
    public static MARGIN: int
    public static SPACE: int
    public static SCROLLBAR_AREA: int
    public static SCROLLBAR_WIDTH: int
    public static NONE: int
    public static WINDOW: int
    public static VERSCROLLBAR: int
    public static HORSCROLLBAR: int
    public static DEFAULT_VISIBLE_ROWS: int
    public static HORIZ_SCROLL_AMT: int
    public preInit(arg0: sun.awt.X11.XCreateWindowParams): void
    public postInit(arg0: sun.awt.X11.XCreateWindowParams): void
    public add(arg0: java.lang.String | string, arg1: int): void
    public removeAll(): void
    public setMultipleMode(arg0: boolean): void
    public getPreferredSize(arg0: int): java.awt.Dimension
    public getMinimumSize(arg0: int): java.awt.Dimension
    public minimumSize(): java.awt.Dimension
    public preferredSize(arg0: int): java.awt.Dimension
    public minimumSize(arg0: int): java.awt.Dimension
    public setForeground(arg0: java.awt.Color): void
    public setBackground(arg0: java.awt.Color): void
    public repaintScrollbarRequest(arg0: sun.awt.X11.XScrollbar): void
    public repaint(): void
    public isFocusable(): boolean
    public focusGained(arg0: java.awt.event.FocusEvent): void
    public focusLost(arg0: java.awt.event.FocusEvent): void
    public layout(): void
    public handleConfigureNotifyEvent(arg0: sun.awt.X11.XEvent): void
    public handlesWheelScrolling(): boolean
    public notifyValue(arg0: sun.awt.X11.XScrollbar, arg1: int, arg2: int, arg3: boolean): void
    public setMultipleSelections(arg0: boolean): void
    public addItem(arg0: java.lang.String | string, arg1: int): void
    public delItems(arg0: int, arg1: int): void
    public select(arg0: int): void
    public deselect(arg0: int): void
    public makeVisible(arg0: int): void
    public clear(): void
    public getSelectedIndexes(): int[]
    public setFont(arg0: java.awt.Font): void
    public static class: java.lang.Class<any>
}

        }
    }
}