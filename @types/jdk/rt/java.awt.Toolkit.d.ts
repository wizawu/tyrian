declare namespace java {
    namespace awt {
        abstract class Toolkit {
            protected readonly desktopProperties: java.util.Map<java.lang.String, java.lang.Object>
            protected readonly desktopPropsSupport: java.beans.PropertyChangeSupport
            public constructor()
            protected abstract createDesktopPeer(arg0: java.awt.Desktop): java.awt.peer.DesktopPeer
            protected abstract createButton(arg0: java.awt.Button): java.awt.peer.ButtonPeer
            protected abstract createTextField(arg0: java.awt.TextField): java.awt.peer.TextFieldPeer
            protected abstract createLabel(arg0: java.awt.Label): java.awt.peer.LabelPeer
            protected abstract createList(arg0: java.awt.List): java.awt.peer.ListPeer
            protected abstract createCheckbox(arg0: java.awt.Checkbox): java.awt.peer.CheckboxPeer
            protected abstract createScrollbar(arg0: java.awt.Scrollbar): java.awt.peer.ScrollbarPeer
            protected abstract createScrollPane(arg0: java.awt.ScrollPane): java.awt.peer.ScrollPanePeer
            protected abstract createTextArea(arg0: java.awt.TextArea): java.awt.peer.TextAreaPeer
            protected abstract createChoice(arg0: java.awt.Choice): java.awt.peer.ChoicePeer
            protected abstract createFrame(arg0: java.awt.Frame): java.awt.peer.FramePeer
            protected abstract createCanvas(arg0: java.awt.Canvas): java.awt.peer.CanvasPeer
            protected abstract createPanel(arg0: java.awt.Panel): java.awt.peer.PanelPeer
            protected abstract createWindow(arg0: java.awt.Window): java.awt.peer.WindowPeer
            protected abstract createDialog(arg0: java.awt.Dialog): java.awt.peer.DialogPeer
            protected abstract createMenuBar(arg0: java.awt.MenuBar): java.awt.peer.MenuBarPeer
            protected abstract createMenu(arg0: java.awt.Menu): java.awt.peer.MenuPeer
            protected abstract createPopupMenu(arg0: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer
            protected abstract createMenuItem(arg0: java.awt.MenuItem): java.awt.peer.MenuItemPeer
            protected abstract createFileDialog(arg0: java.awt.FileDialog): java.awt.peer.FileDialogPeer
            protected abstract createCheckboxMenuItem(arg0: java.awt.CheckboxMenuItem): java.awt.peer.CheckboxMenuItemPeer
            protected getMouseInfoPeer(): java.awt.peer.MouseInfoPeer
            protected createComponent(arg0: java.awt.Component): java.awt.peer.LightweightPeer
            protected abstract getFontPeer(arg0: java.lang.String | string, arg1: int): java.awt.peer.FontPeer
            protected loadSystemColors(arg0: int[]): void
            public setDynamicLayout(arg0: boolean): void
            protected isDynamicLayoutSet(): boolean
            public isDynamicLayoutActive(): boolean
            public abstract getScreenSize(): java.awt.Dimension
            public abstract getScreenResolution(): int
            public getScreenInsets(arg0: java.awt.GraphicsConfiguration): java.awt.Insets
            public abstract getColorModel(): java.awt.image.ColorModel
            public abstract getFontList(): java.lang.String[]
            public abstract getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
            public abstract sync(): void
            public static getDefaultToolkit(): java.awt.Toolkit
            public abstract getImage(arg0: java.lang.String | string): java.awt.Image
            public abstract getImage(arg0: java.net.URL): java.awt.Image
            public abstract createImage(arg0: java.lang.String | string): java.awt.Image
            public abstract createImage(arg0: java.net.URL): java.awt.Image
            public abstract prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
            public abstract checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): int
            public abstract createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
            public createImage(arg0: byte[]): java.awt.Image
            public abstract createImage(arg0: byte[], arg1: int, arg2: int): java.awt.Image
            public abstract getPrintJob(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.util.Properties): java.awt.PrintJob
            public getPrintJob(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.awt.JobAttributes, arg3: java.awt.PageAttributes): java.awt.PrintJob
            public abstract beep(): void
            public abstract getSystemClipboard(): java.awt.datatransfer.Clipboard
            public getSystemSelection(): java.awt.datatransfer.Clipboard
            public getMenuShortcutKeyMask(): int
            public getLockingKeyState(arg0: int): boolean
            public setLockingKeyState(arg0: int, arg1: boolean): void
            protected static getNativeContainer(arg0: java.awt.Component): java.awt.Container
            public createCustomCursor(arg0: java.awt.Image, arg1: java.awt.Point, arg2: java.lang.String | string): java.awt.Cursor
            public getBestCursorSize(arg0: int, arg1: int): java.awt.Dimension
            public getMaximumCursorColors(): int
            public isFrameStateSupported(arg0: int): boolean
            public static getProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public getSystemEventQueue(): java.awt.EventQueue
            protected abstract getSystemEventQueueImpl(): java.awt.EventQueue
            public abstract createDragSourceContextPeer(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
            public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.dnd.DragSource, arg2: java.awt.Component, arg3: int, arg4: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$Lambda): T
            public getDesktopProperty<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.lang.Object
            protected setDesktopProperty<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.lang.Object): void
            protected lazilyLoadDesktopProperty<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.lang.Object
            protected initializeDesktopProperties<T extends java.awt.dnd.DragGestureRecognizer>(): void
            public addPropertyChangeListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public removePropertyChangeListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
            public getPropertyChangeListeners<T extends java.awt.dnd.DragGestureRecognizer>(): java.beans.PropertyChangeListener[]
            public getPropertyChangeListeners<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
            public isAlwaysOnTopSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public abstract isModalityTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalityType): boolean
            public abstract isModalExclusionTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalExclusionType): boolean
            public addAWTEventListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.event.AWTEventListener | java.awt.event.AWTEventListener$$Lambda, arg1: long): void
            public removeAWTEventListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.event.AWTEventListener | java.awt.event.AWTEventListener$$Lambda): void
            public getAWTEventListeners<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.event.AWTEventListener[]
            public getAWTEventListeners<T extends java.awt.dnd.DragGestureRecognizer>(arg0: long): java.awt.event.AWTEventListener[]
            public abstract mapInputMethodHighlight<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.im.InputMethodHighlight): java.util.Map<java.awt.font.TextAttribute, any>
            public areExtraMouseButtonsEnabled<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
            public static class: java.lang.Class<any>
        }
    }
}