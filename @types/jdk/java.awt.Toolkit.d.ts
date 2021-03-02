declare namespace java {
  namespace awt {

    abstract class Toolkit {
      protected readonly desktopProperties: java.util.Map<java.lang.String,java.lang.Object>
      protected readonly desktopPropsSupport: java.beans.PropertyChangeSupport
      static readonly $assertionsDisabled: boolean
      public constructor()
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
      public abstract getImage(arg0: java.lang.String): java.awt.Image
      public abstract getImage(arg0: java.net.URL): java.awt.Image
      public abstract createImage(arg0: java.lang.String): java.awt.Image
      public abstract createImage(arg0: java.net.URL): java.awt.Image
      public abstract prepareImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): boolean
      public abstract checkImage(arg0: java.awt.Image, arg1: int, arg2: int, arg3: java.awt.image.ImageObserver): int
      public abstract createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
      public createImage(arg0: byte[]): java.awt.Image
      public abstract createImage(arg0: byte[], arg1: int, arg2: int): java.awt.Image
      public abstract getPrintJob(arg0: java.awt.Frame, arg1: java.lang.String, arg2: java.util.Properties): java.awt.PrintJob
      public getPrintJob(arg0: java.awt.Frame, arg1: java.lang.String, arg2: java.awt.JobAttributes, arg3: java.awt.PageAttributes): java.awt.PrintJob
      public abstract beep(): void
      public abstract getSystemClipboard(): java.awt.datatransfer.Clipboard
      public getSystemSelection(): java.awt.datatransfer.Clipboard
      public getMenuShortcutKeyMask(): int
      public getMenuShortcutKeyMaskEx(): int
      public getLockingKeyState(arg0: int): boolean
      public setLockingKeyState(arg0: int, arg1: boolean): void
      protected static getNativeContainer(arg0: java.awt.Component): java.awt.Container
      public createCustomCursor(arg0: java.awt.Image, arg1: java.awt.Point, arg2: java.lang.String): java.awt.Cursor
      public getBestCursorSize(arg0: int, arg1: int): java.awt.Dimension
      public getMaximumCursorColors(): int
      public isFrameStateSupported(arg0: int): boolean
      static loadLibraries(): void
      public static getProperty(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
      public getSystemEventQueue(): java.awt.EventQueue
      protected abstract getSystemEventQueueImpl(): java.awt.EventQueue
      static getEventQueue(): java.awt.EventQueue
      public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(arg0: java.lang.Class<T>, arg1: java.awt.dnd.DragSource, arg2: java.awt.Component, arg3: int, arg4: java.awt.dnd.DragGestureListener): T
      public getDesktopProperty(arg0: java.lang.String): java.lang.Object
      protected setDesktopProperty(arg0: java.lang.String, arg1: java.lang.Object): void
      protected lazilyLoadDesktopProperty(arg0: java.lang.String): java.lang.Object
      protected initializeDesktopProperties(): void
      public addPropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      public removePropertyChangeListener(arg0: java.lang.String, arg1: java.beans.PropertyChangeListener): void
      public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
      public getPropertyChangeListeners(arg0: java.lang.String): java.beans.PropertyChangeListener[]
      public isAlwaysOnTopSupported(): boolean
      public abstract isModalityTypeSupported(arg0: java.awt.Dialog$ModalityType): boolean
      public abstract isModalExclusionTypeSupported(arg0: java.awt.Dialog$ModalExclusionType): boolean
      public addAWTEventListener(arg0: java.awt.event.AWTEventListener, arg1: long): void
      public removeAWTEventListener(arg0: java.awt.event.AWTEventListener): void
      static enabledOnToolkit(arg0: long): boolean
      countAWTEventListeners(arg0: long): int
      public getAWTEventListeners(): java.awt.event.AWTEventListener[]
      public getAWTEventListeners(arg0: long): java.awt.event.AWTEventListener[]
      notifyAWTEventListeners(arg0: java.awt.AWTEvent): void
      public abstract mapInputMethodHighlight(arg0: java.awt.im.InputMethodHighlight): java.util.Map<java.awt.font.TextAttribute,unknown>
      public areExtraMouseButtonsEnabled(): boolean
    }

  }
}
