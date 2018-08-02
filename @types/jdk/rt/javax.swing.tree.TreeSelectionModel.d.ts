declare namespace javax {
    namespace swing {
        namespace tree {
            interface TreeSelectionModel {
                SINGLE_TREE_SELECTION: int
                CONTIGUOUS_TREE_SELECTION: int
                DISCONTIGUOUS_TREE_SELECTION: int
                setSelectionMode(arg0: int): void
                getSelectionMode(): int
                setSelectionPath(arg0: javax.swing.tree.TreePath): void
                setSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
                addSelectionPath(arg0: javax.swing.tree.TreePath): void
                addSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
                removeSelectionPath(arg0: javax.swing.tree.TreePath): void
                removeSelectionPaths(arg0: javax.swing.tree.TreePath[]): void
                getSelectionPath(): javax.swing.tree.TreePath
                getSelectionPaths(): javax.swing.tree.TreePath[]
                getSelectionCount(): int
                isPathSelected(arg0: javax.swing.tree.TreePath): boolean
                isSelectionEmpty(): boolean
                clearSelection(): void
                setRowMapper(arg0: javax.swing.tree.RowMapper | javax.swing.tree.RowMapper$$Lambda): void
                getRowMapper(): javax.swing.tree.RowMapper
                getSelectionRows(): int[]
                getMinSelectionRow(): int
                getMaxSelectionRow(): int
                isRowSelected(arg0: int): boolean
                resetRowSelection(): void
                getLeadSelectionRow(): int
                getLeadSelectionPath(): javax.swing.tree.TreePath
                addPropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                removePropertyChangeListener(arg0: java.beans.PropertyChangeListener): void
                addTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener): void
                removeTreeSelectionListener(arg0: javax.swing.event.TreeSelectionListener): void
            }
        }
    }
}