declare namespace javax {
  namespace swing {
    namespace plaf {
      namespace multi {

        class MultiTreeUI extends javax.swing.plaf.TreeUI {

          protected uis: java.util.Vector<javax.swing.plaf.ComponentUI>
          public constructor()
          public getUIs(): javax.swing.plaf.ComponentUI[]
          public getPathBounds(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): java.awt.Rectangle
          public getPathForRow(arg0: javax.swing.JTree, arg1: int): javax.swing.tree.TreePath
          public getRowForPath(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): int
          public getRowCount(arg0: javax.swing.JTree): int
          public getClosestPathForLocation(arg0: javax.swing.JTree, arg1: int, arg2: int): javax.swing.tree.TreePath
          public isEditing(arg0: javax.swing.JTree): boolean
          public stopEditing(arg0: javax.swing.JTree): boolean
          public cancelEditing(arg0: javax.swing.JTree): void
          public startEditingAtPath(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): void
          public getEditingPath(arg0: javax.swing.JTree): javax.swing.tree.TreePath
          public contains(arg0: javax.swing.JComponent, arg1: int, arg2: int): boolean
          public update(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public static createUI(arg0: javax.swing.JComponent): javax.swing.plaf.ComponentUI
          public installUI(arg0: javax.swing.JComponent): void
          public uninstallUI(arg0: javax.swing.JComponent): void
          public paint(arg0: java.awt.Graphics, arg1: javax.swing.JComponent): void
          public getPreferredSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMinimumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getMaximumSize(arg0: javax.swing.JComponent): java.awt.Dimension
          public getAccessibleChildrenCount(arg0: javax.swing.JComponent): int
          public getAccessibleChild(arg0: javax.swing.JComponent, arg1: int): javax.accessibility.Accessible
        }

      }
    }
  }
}
