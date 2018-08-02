declare namespace javax {
    namespace swing {
        namespace plaf {
            abstract class TreeUI extends javax.swing.plaf.ComponentUI {
                public constructor()
                public getPathBounds(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): java.awt.Rectangle
                public getPathForRow(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: int): javax.swing.tree.TreePath
                public getRowForPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): int
                public getRowCount(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): int
                public getClosestPathForLocation(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: int, arg2: int): javax.swing.tree.TreePath
                public isEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): boolean
                public stopEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): boolean
                public cancelEditing(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): void
                public startEditingAtPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda, arg1: javax.swing.tree.TreePath): void
                public getEditingPath(arg0: javax.swing.JTree | javax.swing.JTree$$Lambda): javax.swing.tree.TreePath
                public static class: java.lang.Class<any>
            }
        }
    }
}