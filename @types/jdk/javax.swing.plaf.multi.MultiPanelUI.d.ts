declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace multi {

        class MultiPanelUI extends javax.swing.plaf.PanelUI {
          protected uis: java.util.Vector<javax.swing.plaf.ComponentUI>
          public constructor()
          public getUIs(): javax.swing.plaf.ComponentUI[]
          public contains(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): boolean
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getAccessibleChildrenCount(arg0: javax.swing.JComponent): number
          public getAccessibleChild(arg0: javax.swing.JComponent, arg1: number | java.lang.Integer): javax.accessibility.Accessible
        }

      }
    }
  }
}
