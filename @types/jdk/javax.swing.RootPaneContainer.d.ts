declare namespace javax {
  namespace swing {

    interface RootPaneContainer {

      getRootPane(): javax.swing.JRootPane
      setContentPane(arg0: java.awt.Container): void
      getContentPane(): java.awt.Container
      setLayeredPane(arg0: javax.swing.JLayeredPane): void
      getLayeredPane(): javax.swing.JLayeredPane
      setGlassPane(arg0: java.awt.Component): void
      getGlassPane(): java.awt.Component
    }

  }
}
