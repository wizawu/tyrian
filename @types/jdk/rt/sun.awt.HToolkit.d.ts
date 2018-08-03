declare namespace sun {
    namespace awt {
        class HToolkit extends sun.awt.SunToolkit implements sun.awt.ComponentFactory {
            public constructor()
            public createWindow(arg0: java.awt.Window): java.awt.peer.WindowPeer
            public createLightweightFrame(arg0: sun.awt.LightweightFrame): java.awt.peer.FramePeer
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
            public getDataTransferer(): sun.awt.datatransfer.DataTransferer
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
            protected syncNativeQueue<T extends java.awt.dnd.DragGestureRecognizer>(arg0: long): boolean
            public beep<T extends java.awt.dnd.DragGestureRecognizer>(): void
            public getFontPeer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: int): java.awt.peer.FontPeer
            public isModalityTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalityType): boolean
            public isModalExclusionTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalExclusionType): boolean
            public isDesktopSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public createDesktopPeer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Desktop): java.awt.peer.DesktopPeer
            public isWindowOpacityControlSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public isWindowShapingSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public isWindowTranslucencySupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public grab<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Window): void
            public ungrab<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Window): void
            protected syncNativeQueue<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public getInputMethodAdapterDescriptor<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.im.spi.InputMethodDescriptor
            public static class: java.lang.Class<any>
        }
    }
}