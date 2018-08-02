declare namespace javax {
    namespace swing {
        namespace tree {
interface TreeModel {
    getRoot(): java.lang.Object
    getChild(arg0: java.lang.Object, arg1: int): java.lang.Object
    getChildCount(arg0: java.lang.Object): int
    isLeaf(arg0: java.lang.Object): boolean
    valueForPathChanged(arg0: javax.swing.tree.TreePath, arg1: java.lang.Object): void
    getIndexOfChild(arg0: java.lang.Object, arg1: java.lang.Object): int
    addTreeModelListener(arg0: javax.swing.event.TreeModelListener): void
    removeTreeModelListener(arg0: javax.swing.event.TreeModelListener): void
}

        }
    }
}