declare namespace javax {
  namespace swing {

    class JScrollPane extends javax.swing.JComponent implements javax.swing.ScrollPaneConstants, javax.accessibility.Accessible {
      protected verticalScrollBarPolicy: int
      protected horizontalScrollBarPolicy: int
      protected viewport: javax.swing.JViewport
      protected verticalScrollBar: javax.swing.JScrollBar
      protected horizontalScrollBar: javax.swing.JScrollBar
      protected rowHeader: javax.swing.JViewport
      protected columnHeader: javax.swing.JViewport
      protected lowerLeft: java.awt.Component
      protected lowerRight: java.awt.Component
      protected upperLeft: java.awt.Component
      protected upperRight: java.awt.Component
      public constructor(arg0: java.awt.Component, arg1: int, arg2: int)
      public constructor(arg0: java.awt.Component)
      public constructor(arg0: int, arg1: int)
      public constructor()
      public getUI(): javax.swing.plaf.ScrollPaneUI
      public setUI(arg0: javax.swing.plaf.ScrollPaneUI): void
      public updateUI(): void
      public getUIClassID(): java.lang.String
      public setLayout(arg0: java.awt.LayoutManager): void
      public isValidateRoot(): boolean
      public getVerticalScrollBarPolicy(): int
      public setVerticalScrollBarPolicy(arg0: int): void
      public getHorizontalScrollBarPolicy(): int
      public setHorizontalScrollBarPolicy(arg0: int): void
      public getViewportBorder(): javax.swing.border.Border
      public setViewportBorder(arg0: javax.swing.border.Border): void
      public getViewportBorderBounds(): java.awt.Rectangle
      public createHorizontalScrollBar(): javax.swing.JScrollBar
      public getHorizontalScrollBar(): javax.swing.JScrollBar
      public setHorizontalScrollBar(arg0: javax.swing.JScrollBar): void
      public createVerticalScrollBar(): javax.swing.JScrollBar
      public getVerticalScrollBar(): javax.swing.JScrollBar
      public setVerticalScrollBar(arg0: javax.swing.JScrollBar): void
      protected createViewport(): javax.swing.JViewport
      public getViewport(): javax.swing.JViewport
      public setViewport(arg0: javax.swing.JViewport): void
      public setViewportView(arg0: java.awt.Component): void
      public getRowHeader(): javax.swing.JViewport
      public setRowHeader(arg0: javax.swing.JViewport): void
      public setRowHeaderView(arg0: java.awt.Component): void
      public getColumnHeader(): javax.swing.JViewport
      public setColumnHeader(arg0: javax.swing.JViewport): void
      public setColumnHeaderView(arg0: java.awt.Component): void
      public getCorner(arg0: java.lang.String): java.awt.Component
      public setCorner(arg0: java.lang.String, arg1: java.awt.Component): void
      public setComponentOrientation(arg0: java.awt.ComponentOrientation): void
      public isWheelScrollingEnabled(): boolean
      public setWheelScrollingEnabled(arg0: boolean): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
      public getUI(): javax.swing.plaf.ComponentUI
    }

  }
}
