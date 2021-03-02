declare namespace javax {
  namespace swing {
    namespace tree {

      interface TreeSelectionModel {
        public static readonly SINGLE_TREE_SELECTION: int
        public static readonly CONTIGUOUS_TREE_SELECTION: int
        public static readonly DISCONTIGUOUS_TREE_SELECTION: int
        setSelectionMode(arg0: number | java.lang.Integer): void
        getSelectionMode(): number
        setSelectionPath(arg0: javax.swing.tree.TreePath): void
        setSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
        addSelectionPath(arg0: javax.swing.tree.TreePath): void
        addSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
        removeSelectionPath(arg0: javax.swing.tree.TreePath): void
        removeSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
        getSelectionPath(): javax.swing.tree.TreePath
        getSelectionPaths(): javax.swing.tree.TreePath[]
        getSelectionCount(): number
        isPathSelected(arg0: javax.swing.tree.TreePath): boolean
        isSelectionEmpty(): boolean
        clearSelection(): void
        setRowMapper(arg0: javax.swing.tree.RowMapper | javax.swing.tree.RowMapper$$lambda): void
        getRowMapper(): javax.swing.tree.RowMapper
        getSelectionRows(): number[]
        getMinSelectionRow(): number
        getMaxSelectionRow(): number
        isRowSelected(arg0: number | java.lang.Integer): boolean
        resetRowSelection(): void
        getLeadSelectionRow(): number
        getLeadSelectionPath(): javax.swing.tree.TreePath
        addPropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
        removePropertyChangeListener(arg0: java.beans.PropertyChangeListener | java.beans.PropertyChangeListener$$lambda): void
        addTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener | javax.swing.event.TreeSelectionListener$$lambda): void
        removeTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener | javax.swing.event.TreeSelectionListener$$lambda): void
      }

    }
  }
}
