declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace basic {

        class BasicToolTipUI extends javax.swing.plaf.ToolTipUI {

          static sharedInstance: javax.swing.plaf.basic.BasicToolTipUI
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected installDefaults(arg0: javax.swing.JComponent): void
          protected uninstallDefaults(arg0: javax.swing.JComponent): void
          protected installListeners(arg0: javax.swing.JComponent): void
          protected uninstallListeners(arg0: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
        }

      }
    }
  }
}
