declare namespace java {
    namespace awt {
abstract class Toolkit {
    protected desktopProperties: java.util.Map<java.lang.String, java.lang.Object>
    protected desktopPropsSupport: java.beans.PropertyChangeSupport
    public constructor()
    protected createDesktopPeer(arg0: java.awt.Desktop): java.awt.peer.DesktopPeer
    protected createButton(arg0: java.awt.Button | java.awt.Button$$Lambda): java.awt.peer.ButtonPeer
    protected createTextField(arg0: java.awt.TextField): java.awt.peer.TextFieldPeer
    protected createLabel(arg0: java.awt.Label | java.awt.Label$$Lambda): java.awt.peer.LabelPeer
    protected createList(arg0: java.awt.List | java.awt.List$$Lambda): java.awt.peer.ListPeer
    protected createCheckbox(arg0: java.awt.Checkbox | java.awt.Checkbox$$Lambda): java.awt.peer.CheckboxPeer
    protected createScrollbar(arg0: java.awt.Scrollbar | java.awt.Scrollbar$$Lambda): java.awt.peer.ScrollbarPeer
    protected createScrollPane(arg0: java.awt.ScrollPane | java.awt.ScrollPane$$Lambda): java.awt.peer.ScrollPanePeer
    protected createTextArea(arg0: java.awt.TextArea): java.awt.peer.TextAreaPeer
    protected createChoice(arg0: java.awt.Choice | java.awt.Choice$$Lambda): java.awt.peer.ChoicePeer
    protected createFrame(arg0: java.awt.Frame): java.awt.peer.FramePeer
    protected createCanvas(arg0: java.awt.Canvas | java.awt.Canvas$$Lambda): java.awt.peer.CanvasPeer
    protected createPanel(arg0: java.awt.Panel | java.awt.Panel$$Lambda): java.awt.peer.PanelPeer
    protected createWindow(arg0: java.awt.Window | java.awt.Window$$Lambda): java.awt.peer.WindowPeer
    protected createDialog(arg0: java.awt.Dialog): java.awt.peer.DialogPeer
    protected createMenuBar(arg0: java.awt.MenuBar | java.awt.MenuBar$$Lambda): java.awt.peer.MenuBarPeer
    protected createMenu(arg0: java.awt.Menu | java.awt.Menu$$Lambda): java.awt.peer.MenuPeer
    protected createPopupMenu(arg0: java.awt.PopupMenu): java.awt.peer.PopupMenuPeer
    protected createMenuItem(arg0: java.awt.MenuItem | java.awt.MenuItem$$Lambda): java.awt.peer.MenuItemPeer
    protected createFileDialog(arg0: java.awt.FileDialog): java.awt.peer.FileDialogPeer
    protected createCheckboxMenuItem(arg0: java.awt.CheckboxMenuItem | java.awt.CheckboxMenuItem$$Lambda): java.awt.peer.CheckboxMenuItemPeer
    protected getMouseInfoPeer(): java.awt.peer.MouseInfoPeer
    protected createComponent(arg0: java.awt.Component): java.awt.peer.LightweightPeer
    protected getFontPeer(arg0: java.lang.String | string, arg1: int): java.awt.peer.FontPeer
    protected loadSystemColors(arg0: int[]): void
    public setDynamicLayout(arg0: boolean): void
    protected isDynamicLayoutSet(): boolean
    public isDynamicLayoutActive(): boolean
    public getScreenSize(): java.awt.Dimension
    public getScreenResolution(): int
    public getScreenInsets(arg0: java.awt.GraphicsConfiguration): java.awt.Insets
    public getColorModel(): java.awt.image.ColorModel
    public getFontList(): java.lang.String[]
    public getFontMetrics(arg0: java.awt.Font): java.awt.FontMetrics
    public sync(): void
    public static getDefaultToolkit(): java.awt.Toolkit
    public getImage(arg0: java.lang.String | string): java.awt.Image
    public getImage(arg0: java.net.URL): java.awt.Image
    public createImage(arg0: java.lang.String | string): java.awt.Image
    public createImage(arg0: java.net.URL): java.awt.Image
    public prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): boolean
    public checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): int
    public createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
    public createImage(arg0: byte[]): java.awt.Image
    public createImage(arg0: byte[], arg1: int, arg2: int): java.awt.Image
    public getPrintJob(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.util.Properties): java.awt.PrintJob
    public getPrintJob(arg0: java.awt.Frame, arg1: java.lang.String | string, arg2: java.awt.JobAttributes, arg3: java.awt.PageAttributes): java.awt.PrintJob
    public beep(): void
    public getSystemClipboard(): java.awt.datatransfer.Clipboard
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
    protected getSystemEventQueueImpl(): java.awt.EventQueue
    public createDragSourceContextPeer(arg0: java.awt.dnd.DragGestureEvent): java.awt.dnd.peer.DragSourceContextPeer
    public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.dnd.DragSource, arg2: java.awt.Component, arg3: int, arg4: java.awt.dnd.DragGestureListener): T
    public getDesktopProperty<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.lang.Object
    protected setDesktopProperty<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.lang.Object): void
    protected lazilyLoadDesktopProperty<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.lang.Object
    protected initializeDesktopProperties<T extends java.awt.dnd.DragGestureRecognizer>(): void
    public addPropertyChangeListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
    public removePropertyChangeListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string, arg1: java.beans.PropertyChangeListener): void
    public getPropertyChangeListeners<T extends java.awt.dnd.DragGestureRecognizer>(): java.beans.PropertyChangeListener[]
    public getPropertyChangeListeners<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
    public isAlwaysOnTopSupported<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
    public isModalityTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalityType): boolean
    public isModalExclusionTypeSupported<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.Dialog$ModalExclusionType): boolean
    public addAWTEventListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.event.AWTEventListener, arg1: long): void
    public removeAWTEventListener<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.event.AWTEventListener): void
    public getAWTEventListeners<T extends java.awt.dnd.DragGestureRecognizer>(): java.awt.event.AWTEventListener[]
    public getAWTEventListeners<T extends java.awt.dnd.DragGestureRecognizer>(arg0: long): java.awt.event.AWTEventListener[]
    public mapInputMethodHighlight<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.awt.im.InputMethodHighlight): java.util.Map<java.awt.font.TextAttribute, any>
    public areExtraMouseButtonsEnabled<T extends java.awt.dnd.DragGestureRecognizer>(): boolean
    public static class: java.lang.Class<any>
}

    }
}