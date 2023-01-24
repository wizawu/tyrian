declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace metal {
        class MetalTreeUI extends javax.swing.plaf.basic.BasicTreeUI {
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public constructor()
          protected getHorizontalLegBuffer(): number
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          protected decodeLineStyle(arg0: java.lang.Object | any): void
          protected isLocationInExpandControl(
            arg0: number | java.lang.Integer,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer,
            arg3: number | java.lang.Integer
          ): boolean
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintHorizontalSeparators(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          protected paintVerticalPartOfLeg(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: java.awt.Insets,
            arg3: javax.swing.tree.TreePath
          ): void
          protected paintHorizontalPartOfLeg(
            arg0: java.awt.Graphics,
            arg1: java.awt.Rectangle,
            arg2: java.awt.Insets,
            arg3: java.awt.Rectangle,
            arg4: javax.swing.tree.TreePath,
            arg5: number | java.lang.Integer,
            arg6: boolean | java.lang.Boolean,
            arg7: boolean | java.lang.Boolean,
            arg8: boolean | java.lang.Boolean
          ): void
        }
      }
    }
  }
}
