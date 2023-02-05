declare namespace javax {
  namespace swing {
    class JFrame
      extends java.awt.Frame
      implements
        javax.swing.WindowConstants,
        javax.accessibility.Accessible,
        javax.swing.RootPaneContainer,
        javax.swing.TransferHandler$HasGetTransferHandler
    {
      protected rootPane: javax.swing.JRootPane
      protected rootPaneCheckingEnabled: boolean
      protected accessibleContext: javax.accessibility.AccessibleContext
      public constructor()
      public constructor(arg0: java.awt.GraphicsConfiguration)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.String | string, arg1: java.awt.GraphicsConfiguration)
      protected frameInit(): void
      protected createRootPane(): javax.swing.JRootPane
      protected processWindowEvent(arg0: java.awt.event.WindowEvent): void
      public setDefaultCloseOperation(arg0: number | java.lang.Integer): void
      public getDefaultCloseOperation(): number
      public setTransferHandler(arg0: javax.swing.TransferHandler): void
      public getTransferHandler(): javax.swing.TransferHandler
      public update(arg0: java.awt.Graphics): void
      public setJMenuBar(arg0: javax.swing.JMenuBar): void
      public getJMenuBar(): javax.swing.JMenuBar
      protected isRootPaneCheckingEnabled(): boolean
      protected setRootPaneCheckingEnabled(arg0: boolean | java.lang.Boolean): void
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      public remove(arg0: java.awt.Component): void
      public setLayout(arg0: java.awt.LayoutManager): void
      public getRootPane(): javax.swing.JRootPane
      protected setRootPane(arg0: javax.swing.JRootPane): void
      public setIconImage(arg0: java.awt.Image): void
      public getContentPane(): java.awt.Container
      public setContentPane(arg0: java.awt.Container): void
      public getLayeredPane(): javax.swing.JLayeredPane
      public setLayeredPane(arg0: javax.swing.JLayeredPane): void
      public getGlassPane(): java.awt.Component
      public setGlassPane(arg0: java.awt.Component): void
      public getGraphics(): java.awt.Graphics
      public repaint(
        arg0: number | java.lang.Long,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer,
        arg4: number | java.lang.Integer
      ): void
      public static setDefaultLookAndFeelDecorated(arg0: boolean | java.lang.Boolean): void
      public static isDefaultLookAndFeelDecorated(): boolean
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }
  }
}
