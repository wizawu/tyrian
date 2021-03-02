declare namespace javax {
  namespace swing {
    namespace plaf {

      abstract class TreeUI extends javax.swing.plaf.ComponentUI {
        public constructor()
        public abstract getPathBounds(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): java.awt.Rectangle
        public abstract getPathForRow(arg0: javax.swing.JTree, arg1: number | java.lang.Integer): javax.swing.tree.TreePath
        public abstract getRowForPath(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): number
        public abstract getRowCount(arg0: javax.swing.JTree): number
        public abstract getClosestPathForLocation(arg0: javax.swing.JTree, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): javax.swing.tree.TreePath
        public abstract isEditing(arg0: javax.swing.JTree): boolean
        public abstract stopEditing(arg0: javax.swing.JTree): boolean
        public abstract cancelEditing(arg0: javax.swing.JTree): void
        public abstract startEditingAtPath(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): void
        public abstract getEditingPath(arg0: javax.swing.JTree): javax.swing.tree.TreePath
      }

    }
  }
}
