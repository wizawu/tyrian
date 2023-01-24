declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {
        class BasicDesktopIconUI extends javax.swing.plaf.DesktopIconUI {
          protected desktopIcon: javax.swing.JInternalFrame$JDesktopIcon
          protected frame: javax.swing.JInternalFrame
          protected iconPane: javax.swing.JComponent
          mouseInputListener: javax.swing.event.MouseInputListener
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installComponents(): void
          protected uninstallComponents(): void
          protected installListeners(): void
          protected uninstallListeners(): void
          protected installDefaults(): void
          protected uninstallDefaults(): void
          protected createMouseInputListener(): javax.swing.event.MouseInputListener
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getInsets(arg0: javax.swing.JComponent): java.awt.Insets
          public deiconize(): void
        }
      }
    }
  }
}
