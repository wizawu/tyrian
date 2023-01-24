declare namespace java {
  namespace awt {
    abstract class Toolkit {
      protected readonly desktopProperties: java.util.Map<java.lang.String, java.lang.Object>
      protected readonly desktopPropsSupport: java.beans.PropertyChangeSupport
      static readonly $assertionsDisabled: boolean
      public constructor()
      protected loadSystemColors(arg0: number[] | java.lang.Integer[]): void
      public setDynamicLayout(arg0: boolean | java.lang.Boolean): void
      protected isDynamicLayoutSet(): boolean
      public isDynamicLayoutActive(): boolean
      public abstract getScreenSize(): java.awt.Dimension
      public abstract getScreenResolution(): number
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
      public abstract prepareImage(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): boolean
      public abstract checkImage(
        arg0: java.awt.Image,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$lambda
      ): number
      public abstract createImage(arg0: java.awt.image.ImageProducer): java.awt.Image
      public createImage(arg0: number[] | java.lang.Byte[]): java.awt.Image
      public abstract createImage(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.awt.Image
      public abstract getPrintJob(
        arg0: java.awt.Frame,
        arg1: java.lang.String | string,
        arg2: java.util.Properties
      ): java.awt.PrintJob
      public getPrintJob(
        arg0: java.awt.Frame,
        arg1: java.lang.String | string,
        arg2: java.awt.JobAttributes,
        arg3: java.awt.PageAttributes
      ): java.awt.PrintJob
      public abstract beep(): void
      public abstract getSystemClipboard(): java.awt.datatransfer.Clipboard
      public getSystemSelection(): java.awt.datatransfer.Clipboard
      public getMenuShortcutKeyMask(): number
      public getMenuShortcutKeyMaskEx(): number
      public getLockingKeyState(arg0: number | java.lang.Integer): boolean
      public setLockingKeyState(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      protected static getNativeContainer(arg0: java.awt.Component): java.awt.Container
      public createCustomCursor(
        arg0: java.awt.Image,
        arg1: java.awt.Point,
        arg2: java.lang.String | string
      ): java.awt.Cursor
      public getBestCursorSize(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.awt.Dimension
      public getMaximumCursorColors(): number
      public isFrameStateSupported(arg0: number | java.lang.Integer): boolean
      static loadLibraries(): void
      public static getProperty(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
      public getSystemEventQueue(): java.awt.EventQueue
      protected abstract getSystemEventQueueImpl(): java.awt.EventQueue
      static getEventQueue(): java.awt.EventQueue
      public createDragGestureRecognizer<T extends java.awt.dnd.DragGestureRecognizer>(
        arg0: java.lang.Class<T>,
        arg1: java.awt.dnd.DragSource,
        arg2: java.awt.Component,
        arg3: number | java.lang.Integer,
        arg4: java.awt.dnd.DragGestureListener | java.awt.dnd.DragGestureListener$$lambda
      ): T
      public getDesktopProperty(arg0: java.lang.String | string): java.lang.Object
      protected setDesktopProperty(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      protected lazilyLoadDesktopProperty(arg0: java.lang.String | string): java.lang.Object
      protected initializeDesktopProperties(): void
      public addPropertyChangeListener(
        arg0: java.lang.String | string,
        arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public removePropertyChangeListener(
        arg0: java.lang.String | string,
        arg1: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda
      ): void
      public getPropertyChangeListeners(): java.beans.PropertyChangeListener[]
      public getPropertyChangeListeners(arg0: java.lang.String | string): java.beans.PropertyChangeListener[]
      public isAlwaysOnTopSupported(): boolean
      public abstract isModalityTypeSupported(arg0: java.awt.Dialog$ModalityType): boolean
      public abstract isModalExclusionTypeSupported(arg0: java.awt.Dialog$ModalExclusionType): boolean
      public addAWTEventListener(
        arg0: java.awt.event.AWTEventListener | java.awt.event.AWTEventListener$$lambda,
        arg1: number | java.lang.Long
      ): void
      public removeAWTEventListener(
        arg0: java.awt.event.AWTEventListener | java.awt.event.AWTEventListener$$lambda
      ): void
      static enabledOnToolkit(arg0: number | java.lang.Long): boolean
      countAWTEventListeners(arg0: number | java.lang.Long): number
      public getAWTEventListeners(): java.awt.event.AWTEventListener[]
      public getAWTEventListeners(arg0: number | java.lang.Long): java.awt.event.AWTEventListener[]
      notifyAWTEventListeners(arg0: java.awt.AWTEvent): void
      public abstract mapInputMethodHighlight(
        arg0: java.awt.im.InputMethodHighlight
      ): java.util.Map<java.awt.font.TextAttribute, unknown>
      public areExtraMouseButtonsEnabled(): boolean
    }
  }
}
