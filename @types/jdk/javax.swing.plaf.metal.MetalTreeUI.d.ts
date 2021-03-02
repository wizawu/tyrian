declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {

        class MetalTreeUI extends javax.swing.plaf.basic.BasicTreeUI {
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          protected getHorizontalLegBuffer(): int
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected decodeLineStyle(arg0: java.lang.Object): void
          protected isLocationInExpandControl(arg0: int, arg1: int, arg2: int, arg3: int): boolean
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintHorizontalSeparators(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintVerticalPartOfLeg(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: javax.swing.tree.TreePath): void
          protected paintHorizontalPartOfLeg(arg0: java.awt.Graphics, arg1: java.awt.Rectangle, arg2: java.awt.Insets, arg3: java.awt.Rectangle, arg4: javax.swing.tree.TreePath, arg5: int, arg6: boolean, arg7: boolean, arg8: boolean): void
        }

      }
    }
  }
}
