declare namespace javax {
  namespace swing {

    class JLayeredPane extends javax.swing.JComponent implements javax.accessibility.Accessible {
      public static readonly DEFAULT_LAYER: java.lang.Integer
      public static readonly PALETTE_LAYER: java.lang.Integer
      public static readonly MODAL_LAYER: java.lang.Integer
      public static readonly POPUP_LAYER: java.lang.Integer
      public static readonly DRAG_LAYER: java.lang.Integer
      public static readonly FRAME_CONTENT_LAYER: java.lang.Integer
      public static readonly LAYER_PROPERTY: java.lang.String
      public constructor()
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      public remove(arg0: number | java.lang.Integer): void
      public removeAll(): void
      public isOptimizedDrawingEnabled(): boolean
      public static putLayer(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer): void
      public static getLayer(arg0: javax.swing.JComponent): number
      public static getLayeredPaneAbove(arg0: java.awt.Component): javax.swing.JLayeredPane
      public setLayer(arg0: java.awt.Component, arg1: number | java.lang.Integer): void
      public setLayer(arg0: java.awt.Component, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public getLayer(arg0: java.awt.Component): number
      public getIndexOf(arg0: java.awt.Component): number
      public moveToFront(arg0: java.awt.Component): void
      public moveToBack(arg0: java.awt.Component): void
      public setPosition(arg0: java.awt.Component, arg1: number | java.lang.Integer): void
      public getPosition(arg0: java.awt.Component): number
      public highestLayer(): number
      public lowestLayer(): number
      public getComponentCountInLayer(arg0: number | java.lang.Integer): number
      public getComponentsInLayer(arg0: number | java.lang.Integer): java.awt.Component[]
      public paint(arg0: java.awt.Graphics): void
      protected getComponentToLayer(): java.util.Hashtable<java.awt.Component,java.lang.Integer>
      protected getObjectForLayer(arg0: number | java.lang.Integer): number
      protected insertIndexForLayer(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
