declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class MetalToolTipUI extends javax.swing.plaf.basic.BasicToolTipUI {
          static sharedInstance: javax.swing.plaf.metal.MetalToolTipUI
          public static readonly padSpaceBetweenStrings: int
          public constructor()
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          protected isAcceleratorHidden(): boolean
          public getAcceleratorString(): java.lang.String
        }

      }
    }
  }
}
