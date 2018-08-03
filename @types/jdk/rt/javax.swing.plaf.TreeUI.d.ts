declare namespace javax {
    namespace swing {
        namespace plaf {
            abstract class TreeUI extends javax.swing.plaf.ComponentUI {
                public constructor()
                public abstract getPathBounds(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): java.awt.Rectangle
                public abstract getPathForRow(arg0: javax.swing.JTree, arg1: int): javax.swing.tree.TreePath
                public abstract getRowForPath(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): int
                public abstract getRowCount(arg0: javax.swing.JTree): int
                public abstract getClosestPathForLocation(arg0: javax.swing.JTree, arg1: int, arg2: int): javax.swing.tree.TreePath
                public abstract isEditing(arg0: javax.swing.JTree): boolean
                public abstract stopEditing(arg0: javax.swing.JTree): boolean
                public abstract cancelEditing(arg0: javax.swing.JTree): void
                public abstract startEditingAtPath(arg0: javax.swing.JTree, arg1: javax.swing.tree.TreePath): void
                public abstract getEditingPath(arg0: javax.swing.JTree): javax.swing.tree.TreePath
                public static class: java.lang.Class<any>
            }
        }
    }
}