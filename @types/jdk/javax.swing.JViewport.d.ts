declare namespace javax {
  namespace swing {
    class JViewport extends javax.swing.JComponent implements javax.accessibility.Accessible {
      static readonly EnableWindowBlit: java.lang.Object
      protected isViewSizeSet: boolean
      protected lastPaintPosition: java.awt.Point
      protected backingStore: boolean
      protected backingStoreImage: java.awt.Image
      protected scrollUnderway: boolean
      public static readonly BLIT_SCROLL_MODE: int
      public static readonly BACKINGSTORE_SCROLL_MODE: int
      public static readonly SIMPLE_SCROLL_MODE: int
      public constructor()
      public getUI(): javax.swing.plaf.ViewportUI
      public setUI(arg0: javax.swing.plaf.ViewportUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      public remove(arg0: java.awt.Component): void
      public scrollRectToVisible(arg0: java.awt.Rectangle): void
      public setBorder(arg0: javax.swing.border.Border): void
      public getInsets(): java.awt.Insets
      public getInsets(arg0: java.awt.Insets): java.awt.Insets
      public isOptimizedDrawingEnabled(): boolean
      protected isPaintingOrigin(): boolean
      public paint(arg0: java.awt.Graphics): void
      public reshape(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): void
      public setScrollMode(arg0: number | java.lang.Integer): void
      public getScrollMode(): number
      public isBackingStoreEnabled(): boolean
      public setBackingStoreEnabled(arg0: boolean | java.lang.Boolean): void
      public getView(): java.awt.Component
      public setView(arg0: java.awt.Component): void
      public getViewSize(): java.awt.Dimension
      public setViewSize(arg0: java.awt.Dimension): void
      public getViewPosition(): java.awt.Point
      public setViewPosition(arg0: java.awt.Point): void
      public getViewRect(): java.awt.Rectangle
      protected computeBlit(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: java.awt.Point,
        arg3: java.awt.Point,
        arg4: java.awt.Dimension,
        arg5: java.awt.Rectangle
      ): boolean
      public getExtentSize(): java.awt.Dimension
      public toViewCoordinates(arg0: java.awt.Dimension): java.awt.Dimension
      public toViewCoordinates(arg0: java.awt.Point): java.awt.Point
      public setExtentSize(arg0: java.awt.Dimension): void
      protected createViewListener(): javax.swing.JViewport$ViewListener
      protected createLayoutManager(): java.awt.LayoutManager
      public addChangeListener(arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda): void
      public removeChangeListener(
        arg0: javax.swing.event.ChangeListener | javax.swing.event.ChangeListener$$lambda
      ): void
      public getChangeListeners(): javax.swing.event.ChangeListener[]
      protected fireStateChanged(): void
      public repaint(
        arg0: number | java.lang.Long,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): void
      protected paramString(): java.lang.String
      protected firePropertyChange(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: java.lang.Object | any
      ): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }
  }
}
