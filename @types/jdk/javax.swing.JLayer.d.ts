declare namespace javax {
  namespace swing {

    class JLayer<V extends java.awt.Component> extends javax.swing.JComponent implements javax.swing.Scrollable, java.beans.PropertyChangeListener, javax.accessibility.Accessible {
      public constructor()
      public constructor(arg0: V)
      public constructor(arg0: V, arg1: javax.swing.plaf.LayerUI<V>)
      public getView(): V
      public setView(arg0: V): void
      public setUI(arg0: javax.swing.plaf.LayerUI<unknown>): void
      public getUI(): javax.swing.plaf.LayerUI<unknown>
      public getGlassPane(): javax.swing.JPanel
      public setGlassPane(arg0: javax.swing.JPanel): void
      public createGlassPane(): javax.swing.JPanel
      public setLayout(arg0: java.awt.LayoutManager): void
      public setBorder(arg0: javax.swing.border.Border): void
      public getBorder(): javax.swing.border.Border
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      public remove(arg0: java.awt.Component): void
      public removeAll(): void
      protected isPaintingOrigin(): boolean
      public paintImmediately(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      public imageUpdate(arg0: java.awt.Image, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer, arg5: number | java.lang.Integer): boolean
      public paint(arg0: java.awt.Graphics): void
      protected paintComponent(arg0: java.awt.Graphics): void
      public isOptimizedDrawingEnabled(): boolean
      public propertyChange(arg0: java.beans.PropertyChangeEvent): void
      public setLayerEventMask(arg0: number | java.lang.Long): void
      public getLayerEventMask(): number
      public updateUI(): void
      public getPreferredScrollableViewportSize(): java.awt.Dimension
      public getScrollableBlockIncrement(arg0: java.awt.Rectangle, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public getScrollableTracksViewportHeight(): boolean
      public getScrollableTracksViewportWidth(): boolean
      public getScrollableUnitIncrement(arg0: java.awt.Rectangle, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public addNotify(): void
      public removeNotify(): void
      public doLayout(): void
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
