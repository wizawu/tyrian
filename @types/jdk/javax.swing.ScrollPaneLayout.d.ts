declare namespace javax {
  namespace swing {
    class ScrollPaneLayout implements java.awt.LayoutManager, javax.swing.ScrollPaneConstants, java.io.Serializable {
      protected viewport: javax.swing.JViewport
      protected vsb: javax.swing.JScrollBar
      protected hsb: javax.swing.JScrollBar
      protected rowHead: javax.swing.JViewport
      protected colHead: javax.swing.JViewport
      protected lowerLeft: java.awt.Component
      protected lowerRight: java.awt.Component
      protected upperLeft: java.awt.Component
      protected upperRight: java.awt.Component
      protected vsbPolicy: int
      protected hsbPolicy: int
      public constructor()
      public syncWithScrollPane(arg0: javax.swing.JScrollPane): void
      protected addSingletonComponent(arg0: java.awt.Component, arg1: java.awt.Component): java.awt.Component
      public addLayoutComponent(arg0: java.lang.String | string, arg1: java.awt.Component): void
      public removeLayoutComponent(arg0: java.awt.Component): void
      public getVerticalScrollBarPolicy(): number
      public setVerticalScrollBarPolicy(arg0: number | java.lang.Integer): void
      public getHorizontalScrollBarPolicy(): number
      public setHorizontalScrollBarPolicy(arg0: number | java.lang.Integer): void
      public getViewport(): javax.swing.JViewport
      public getHorizontalScrollBar(): javax.swing.JScrollBar
      public getVerticalScrollBar(): javax.swing.JScrollBar
      public getRowHeader(): javax.swing.JViewport
      public getColumnHeader(): javax.swing.JViewport
      public getCorner(arg0: java.lang.String | string): java.awt.Component
      public preferredLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public minimumLayoutSize(arg0: java.awt.Container): java.awt.Dimension
      public layoutContainer(arg0: java.awt.Container): void
      public getViewportBorderBounds(arg0: javax.swing.JScrollPane): java.awt.Rectangle
    }
  }
}
