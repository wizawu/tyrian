declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace multi {
        class MultiSplitPaneUI extends javax.swing.plaf.SplitPaneUI {
          protected uis: java.util.Vector<javax.swing.plaf.ComponentUI>
          public constructor()
          public getUIs(): javax.swing.plaf.ComponentUI[]
          public resetToPreferredSizes(arg0: javax.swing.JSplitPane): void
          public setDividerLocation(arg0: javax.swing.JSplitPane, arg1: number | java.lang.Integer): void
          public getDividerLocation(arg0: javax.swing.JSplitPane): number
          public getMinimumDividerLocation(arg0: javax.swing.JSplitPane): number
          public getMaximumDividerLocation(arg0: javax.swing.JSplitPane): number
          public finishedPaintingChildren(arg0: javax.swing.JSplitPane, arg1: java.awt.Graphics): void
          public contains(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer,
            arg2: number | java.lang.Integer
          ): boolean
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getAccessibleChildrenCount(arg0: javax.swing.JComponent): number
          public getAccessibleChild(
            arg0: javax.swing.JComponent,
            arg1: number | java.lang.Integer
          ): javax.accessibility.Accessible
        }
      }
    }
  }
}
