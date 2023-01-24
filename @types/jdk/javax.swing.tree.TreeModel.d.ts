declare namespace javax {
  namespace swing {
    namespace tree {
      interface TreeModel {
        getRoot(): java.lang.Object
        getChild(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): java.lang.Object
        getChildCount(arg0: java.lang.Object | any): number
        isLeaf(arg0: java.lang.Object | any): boolean
        valueForPathChanged(arg0: javax.swing.tree.TreePath, arg1: java.lang.Object | any): void
        getIndexOfChild(arg0: java.lang.Object | any, arg1: java.lang.Object | any): number
        addTreeModelListener(arg0: javax.swing.event.TreeModelListener): void
        removeTreeModelListener(arg0: javax.swing.event.TreeModelListener): void
      }
    }
  }
}
