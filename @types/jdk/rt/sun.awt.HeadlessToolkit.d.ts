declare namespace sun {
    namespace awt {
        class HeadlessToolkit extends java.awt.Toolkit implements sun.awt.ComponentFactory , sun.awt.KeyboardFocusManagerPeerProvider {
            public constructor(arg0: java.awt.Toolkit)
            public getUnderlyingToolkit(): java.awt.Toolkit
            public createCanvas(arg0: java.awt.Canvas): java.awt.peer.CanvasPeer
            public createPanel(arg0: java.awt.Panel): java.awt.peer.PanelPeer
            public createWindow(arg0: java.awt.Window): java.awt.peer.WindowPeer
            public createFrame(arg0: java.awt.Frame): java.awt.peer.FramePeer
            public createDialog(arg0: java.awt.Dialog): java.awt.peer.DialogPeer
            public createButton(arg0: java.awt.Button): java.awt.peer.ButtonPeer
            public createTextField(arg0: java.awt.TextField): java.awt.peer.TextFieldPeer
            public createChoice(arg0: java.awt.Choice): java.awt.peer.ChoicePeer
            public createLabel(arg0: java.awt.Label): java.awt.peer.LabelPeer
            public createList(arg0: java.awt.List): java.awt.peer.ListPeer
            public createCheckbox(arg0: java.awt.Checkbox): java.awt.peer.CheckboxPeer
            public createScrollbar(arg0: java.awt.Scrollbar): java.awt.peer.ScrollbarPeer
            public createScrollPane(arg0: java.awt.ScrollPane): java.awt.peer.ScrollPanePeer
            public createTextArea(arg0: java.awt.TextArea): java.awt.peer.TextAreaPeer
            public createFileDialog(arg0: java.awt.FileDialog): java.awt.peer.FileDialogPeer
            public createMenuBar(arg0: java.awt.MenuBar): java.awt.peer.MenuBarPeer
            public createMenu(arg0: java.awt.Menu): java.awt.peer.MenuPeer
            public createPopupMenu(arg0: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer
            public createMenuItem(arg0: java.awt.MenuItem): java.awt.peer.MenuItemPeer
            public createCheckboxMenuItem(arg0: java.awt.CheckboxMenuItem): java.awt.peer.CheckboxMenuItemPeer
            public createDragSourceContextPeer(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            public createRobot(arg0: java.awt.Robot, arg1: java.awt.GraphicsDevice): java.awt.peer.RobotPeer
            public getKeyboardFocusManagerPeer(): java.awt.peer.KeyboardFocusManagerPeer
            public createTrayIcon(arg0: java.awt.TrayIcon): java.awt.peer.TrayIconPeer
            public createSystemTray(arg0: java.awt.SystemTray): java.awt.peer.SystemTrayPeer
            public isTraySupported(): boolean
            public getGlobalCursorManager(): sun.awt.GlobalCursorManager
            protected loadSystemColors(arg0: int[]): void
            public getColorModel(): java.awt.image.ColorModel
            public getScreenResolution(): int
            public mapInputMethodHighlight(arg0: java.awt.im.InputMethodHighlight): java.util.Map
            public getMenuShortcutKeyMask(): int
            public getLockingKeyState(arg0: int): boolean
            public setLockingKeyState(arg0: int, arg1: boolean): void
            public createCustomCursor(arg0: java.awt.Image, arg1: java.awt.Point, arg2: java.lang.String | string): java.awt.Cursor
            public getBestCursorSize(arg0: int, arg1: int): java.awt.Dimension
            public getMaximumCursorColors(): int
            public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.dnd.DragSource, arg2: java.awt.Component, arg3: int, arg4: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): T
            public getScreenHeight<T extends java.awt.dnd.DragGestureRecognizer>(): int
            public getScreenWidth<T extends java.awt.dnd.DragGestureRecognizer>(): int
            public getScreenSize<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.Dimension
            public getScreenInsets<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.GraphicsConfiguration): java.awt.Insets
            public setDynamicLayout<T extends java.awt.dnd.DragGestureRecognizer>(arg0: boolean): void
            protected isDynamicLayoutSet<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public isDynamicLayoutActive<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public getSystemClipboard<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.datatransfer.Clipboard
            public getPrintJob<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.awt.JobAttributes, arg3: java.awt.PageAttributes): java.awt.PrintJob
            public getPrintJob<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.util.Properties): java.awt.PrintJob
            public sync<T extends java.awt.dnd.DragGestureRecognizer>(): void
            public beep<T extends java.awt.dnd.DragGestureRecognizer>(): void
            public getSystemEventQueueImpl<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.EventQueue
            public checkImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
            public prepareImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public getImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.awt.Image
            public getImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.net.URL): java.awt.Image
            public createImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.awt.Image
            public createImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.net.URL): java.awt.Image
            public createImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: byte[], arg1: int, arg2: int): java.awt.Image
            public createImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.image.ImageProducer): java.awt.Image
            public createImage<T extends java.awt.dnd.DragGestureRecognizer>(arg0: byte[]): java.awt.Image
            public getFontPeer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: int): java.awt.peer.FontPeer
            public getDataTransferer<T extends java.awt.dnd.DragGestureRecognizer>(): sun.awt.datatransfer.DataTransferer
            public getFontMetrics<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Font): java.awt.FontMetrics
            public getFontList<T extends java.awt.dnd.DragGestureRecognizer>(): java.lang.String[]
            public addPropertyChangeListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public isModalityTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalityType): boolean
            public isModalExclusionTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalExclusionType): boolean
            public isAlwaysOnTopSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public addAWTEventListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.event.AWTEventListener | java.awt.event.AWTEventListener$$Lambda, arg1: long): void
            public removeAWTEventListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.event.AWTEventListener | java.awt.event.AWTEventListener$$Lambda): void
            public getAWTEventListeners<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.event.AWTEventListener[]
            public getAWTEventListeners<T extends java.awt.dnd.DragGestureRecognizer>(arg0: long): java.awt.event.AWTEventListener[]
            public isDesktopSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public createDesktopPeer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Desktop): java.awt.peer.DesktopPeer
            public areExtraMouseButtonsEnabled<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public static class: java.lang.Class<any>
        }
    }
}