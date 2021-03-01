declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class MetalDesktopIconUI extends javax.swing.plaf.basic.BasicDesktopIconUI {

          button: javax.swing.JButton
          label: javax.swing.JLabel
          titleListener: javax.swing.plaf.metal.MetalDesktopIconUI$TitleListener
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          protected installDefaults(): void
          protected installComponents(): void
          protected uninstallComponents(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        }

      }
    }
  }
}
