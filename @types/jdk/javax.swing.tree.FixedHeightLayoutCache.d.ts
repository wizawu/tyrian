declare namespace javax {
  namespace swing {
    namespace tree {

      class FixedHeightLayoutCache extends javax.swing.tree.AbstractLayoutCache {

        public constructor()
        public setModel(arg0: javax.swing.tree.TreeModel): void
        public setRootVisible(arg0: boolean): void
        public setRowHeight(arg0: int): void
        public getRowCount(): int
        public invalidatePathBounds(arg0: javax.swing.tree.TreePath): void
        public invalidateSizes(): void
        public isExpanded(arg0: javax.swing.tree.TreePath): boolean
        public getBounds(arg0: javax.swing.tree.TreePath, arg1: java.awt.Rectangle): java.awt.Rectangle
        public getPathForRow(arg0: int): javax.swing.tree.TreePath
        public getRowForPath(arg0: javax.swing.tree.TreePath): int
        public getPathClosestTo(arg0: int, arg1: int): javax.swing.tree.TreePath
        public getVisibleChildCount(arg0: javax.swing.tree.TreePath): int
        public getVisiblePathsFrom(arg0: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
        public setExpandedState(arg0: javax.swing.tree.TreePath, arg1: boolean): void
        public getExpandedState(arg0: javax.swing.tree.TreePath): boolean
        public treeNodesChanged(arg0: javax.swing.event.TreeModelEvent): void
        public treeNodesInserted(arg0: javax.swing.event.TreeModelEvent): void
        public treeNodesRemoved(arg0: javax.swing.event.TreeModelEvent): void
        public treeStructureChanged(arg0: javax.swing.event.TreeModelEvent): void
      }

    }
  }
}
