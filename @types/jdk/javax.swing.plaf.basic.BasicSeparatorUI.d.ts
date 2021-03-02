declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicSeparatorUI extends javax.swing.plaf.SeparatorUI {
          protected shadow: java.awt.Color
          protected highlight: java.awt.Color
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(arg0: javax.swing.JSeparator): void
          protected uninstallDefaults(arg0: javax.swing.JSeparator): void
          protected installListeners(arg0: javax.swing.JSeparator): void
          protected uninstallListeners(arg0: javax.swing.JSeparator): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        }

      }
    }
  }
}
