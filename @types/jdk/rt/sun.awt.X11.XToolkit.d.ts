declare namespace sun {
    namespace awt {
        namespace X11 {
            class XToolkit extends sun.awt.UNIXToolkit implements java.lang.Runnable {
                protected static dynamicLayoutSetting: boolean
                public loadSystemColors(arg0: int[]): void
                public static getDisplay(): long
                public static getDefaultRootWindow(): long
                public constructor()
                public createButton(arg0: java.awt.Button): java.awt.peer.ButtonPeer
                public createLightweightFrame(arg0: sun.awt.LightweightFrame): java.awt.peer.FramePeer
                public createFrame(arg0: java.awt.Frame): java.awt.peer.FramePeer
                public addXEventListener(arg0: sun.awt.X11.XToolkit$XEventListener | sun.awt.X11.XToolkit$XEventListener$$Lambda): void
                public run(): void
                public run(arg0: boolean): void
                protected getScreenWidth(): int
                protected getScreenHeight(): int
                public getScreenInsets(arg0: java.awt.GraphicsConfiguration): java.awt.Insets
                protected static targetToPeer(arg0: java.lang.Object): java.lang.Object
                protected static targetDisposedPeer(arg0: java.lang.Object, arg1: java.lang.Object): void
                public createRobot(arg0: java.awt.Robot, arg1: java.awt.GraphicsDevice): java.awt.peer.RobotPeer
                public setDynamicLayout(arg0: boolean): void
                protected isDynamicLayoutSet(): boolean
                protected isDynamicLayoutSupported(): boolean
                public isDynamicLayoutActive(): boolean
                public getFontPeer(arg0: java.lang.String | string, arg1: int): java.awt.peer.FontPeer
                public createDragSourceContextPeer(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
                public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.dnd.DragSource, arg2: java.awt.Component, arg3: int, arg4: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): T
                public createCheckboxMenuItem<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.CheckboxMenuItem): java.awt.peer.CheckboxMenuItemPeer
                public createMenuItem<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.MenuItem): java.awt.peer.MenuItemPeer
                public createTextField<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.TextField): java.awt.peer.TextFieldPeer
                public createLabel<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Label): java.awt.peer.LabelPeer
                public createList<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.List): java.awt.peer.ListPeer
                public createCheckbox<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Checkbox): java.awt.peer.CheckboxPeer
                public createScrollbar<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Scrollbar): java.awt.peer.ScrollbarPeer
                public createScrollPane<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.ScrollPane): java.awt.peer.ScrollPanePeer
                public createTextArea<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.TextArea): java.awt.peer.TextAreaPeer
                public createChoice<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Choice): java.awt.peer.ChoicePeer
                public createCanvas<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Canvas): java.awt.peer.CanvasPeer
                public createPanel<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Panel): java.awt.peer.PanelPeer
                public createWindow<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Window): java.awt.peer.WindowPeer
                public createDialog<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog): java.awt.peer.DialogPeer
                public static getSunAwtDisableGtkFileDialogs<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public createFileDialog<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.FileDialog): java.awt.peer.FileDialogPeer
                public createMenuBar<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.MenuBar): java.awt.peer.MenuBarPeer
                public createMenu<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Menu): java.awt.peer.MenuPeer
                public createPopupMenu<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer
                public getMouseInfoPeer<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.peer.MouseInfoPeer
                public createEmbeddedFrame<T extends java.awt.dnd.DragGestureRecognizer>(arg0: sun.awt.X11.XEmbeddedFrame): sun.awt.X11.XEmbeddedFramePeer
                public getKeyboardFocusManagerPeer<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.peer.KeyboardFocusManagerPeer
                public createCustomCursor<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Image, arg1: java.awt.Point, arg2: java.lang.String | string): java.awt.Cursor
                public createTrayIcon<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.TrayIcon): java.awt.peer.TrayIconPeer
                public createSystemTray<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.SystemTray): java.awt.peer.SystemTrayPeer
                public isTraySupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public getDataTransferer<T extends java.awt.dnd.DragGestureRecognizer>(): sun.awt.datatransfer.DataTransferer
                public getBestCursorSize<T extends java.awt.dnd.DragGestureRecognizer>(arg0: int, arg1: int): java.awt.Dimension
                public getMaximumCursorColors<T extends java.awt.dnd.DragGestureRecognizer>(): int
                public mapInputMethodHighlight<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.im.InputMethodHighlight): java.util.Map
                public getLockingKeyState<T extends java.awt.dnd.DragGestureRecognizer>(arg0: int): boolean
                public getSystemClipboard<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.datatransfer.Clipboard
                public getSystemSelection<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.datatransfer.Clipboard
                public beep<T extends java.awt.dnd.DragGestureRecognizer>(): void
                public getPrintJob<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.util.Properties): java.awt.PrintJob
                public getPrintJob<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.awt.JobAttributes, arg3: java.awt.PageAttributes): java.awt.PrintJob
                public getScreenResolution<T extends java.awt.dnd.DragGestureRecognizer>(): int
                public getColorModel<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.image.ColorModel
                public getInputMethodAdapterDescriptor<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.im.spi.InputMethodDescriptor
                public enableInputMethodsForTextComponent<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public isFrameStateSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: int): boolean
                protected initializeDesktopProperties<T extends java.awt.dnd.DragGestureRecognizer>(): void
                public getNumberOfButtons<T extends java.awt.dnd.DragGestureRecognizer>(): int
                protected lazilyLoadDesktopProperty<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.lang.Object
                public addPropertyChangeListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$Lambda): void
                protected needsXEmbedImpl<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public isModalityTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalityType): boolean
                public isModalExclusionTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalExclusionType): boolean
                public isAlwaysOnTopSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public useBufferPerWindow<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public static getEventNumber<T extends java.awt.dnd.DragGestureRecognizer>(): long
                protected syncNativeQueue<T extends java.awt.dnd.DragGestureRecognizer>(arg0: long): boolean
                public grab<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Window): void
                public ungrab<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Window): void
                public isDesktopSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public createDesktopPeer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Desktop): java.awt.peer.DesktopPeer
                public areExtraMouseButtonsEnabled<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public isWindowOpacitySupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public isWindowShapingSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public isWindowTranslucencySupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public isTranslucencyCapable<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.GraphicsConfiguration): boolean
                public static getSunAwtDisableGrab<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}