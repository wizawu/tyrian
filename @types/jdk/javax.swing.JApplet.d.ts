declare namespace javax {
  namespace swing {

    class JApplet extends java.applet.Applet implements javax.accessibility.Accessible, javax.swing.RootPaneContainer, javax.swing.TransferHandler$HasGetTransferHandler {

      protected rootPane: javax.swing.JRootPane
      protected rootPaneCheckingEnabled: boolean
      protected accessibleContext: javax.accessibility.AccessibleContext
      public constructor()
      protected createRootPane(): javax.swing.JRootPane
      public setTransferHandler(arg0: javax.swing.TransferHandler): void
      public getTransferHandler(): javax.swing.TransferHandler
      public update(arg0: java.awt.Graphics): void
      public setJMenuBar(arg0: javax.swing.JMenuBar): void
      public getJMenuBar(): javax.swing.JMenuBar
      protected isRootPaneCheckingEnabled(): boolean
      protected setRootPaneCheckingEnabled(arg0: boolean): void
      protected addImpl(arg0: java.awt.Component, arg1: java.lang.Object, arg2: int): void
      public remove(arg0: java.awt.Component): void
      public setLayout(arg0: java.awt.LayoutManager): void
      public getRootPane(): javax.swing.JRootPane
      protected setRootPane(arg0: javax.swing.JRootPane): void
      public getContentPane(): java.awt.Container
      public setContentPane(arg0: java.awt.Container): void
      public getLayeredPane(): javax.swing.JLayeredPane
      public setLayeredPane(arg0: javax.swing.JLayeredPane): void
      public getGlassPane(): java.awt.Component
      public setGlassPane(arg0: java.awt.Component): void
      public getGraphics(): java.awt.Graphics
      public repaint(arg0: long, arg1: int, arg2: int, arg3: int, arg4: int): void
      protected paramString(): java.lang.String
      public getAccessibleContext(): javax.accessibility.AccessibleContext
    }

  }
}
