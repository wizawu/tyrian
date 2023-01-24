declare namespace javax {
  namespace swing {
    namespace tree {
      class VariableHeightLayoutCache extends javax.swing.tree.AbstractLayoutCache {
        public constructor()
        public setModel(arg0: javax.swing.tree.TreeModel): void
        public setRootVisible(arg0: boolean | java.lang.Boolean): void
        public setRowHeight(arg0: number | java.lang.Integer): void
        public setNodeDimensions(arg0: javax.swing.tree.AbstractLayoutCache$NodeDimensions): void
        public setExpandedState(arg0: javax.swing.tree.TreePath, arg1: boolean | java.lang.Boolean): void
        public getExpandedState(arg0: javax.swing.tree.TreePath): boolean
        public getBounds(arg0: javax.swing.tree.TreePath, arg1: java.awt.Rectangle): java.awt.Rectangle
        public getPathForRow(arg0: number | java.lang.Integer): javax.swing.tree.TreePath
        public getRowForPath(arg0: javax.swing.tree.TreePath): number
        public getRowCount(): number
        public invalidatePathBounds(arg0: javax.swing.tree.TreePath): void
        public getPreferredHeight(): number
        public getPreferredWidth(arg0: java.awt.Rectangle): number
        public getPathClosestTo(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer
        ): javax.swing.tree.TreePath
        public getVisiblePathsFrom(arg0: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
        public getVisibleChildCount(arg0: javax.swing.tree.TreePath): number
        public invalidateSizes(): void
        public isExpanded(arg0: javax.swing.tree.TreePath): boolean
        public treeNodesChanged(arg0: javax.swing.event.TreeModelEvent): void
        public treeNodesInserted(arg0: javax.swing.event.TreeModelEvent): void
        public treeNodesRemoved(arg0: javax.swing.event.TreeModelEvent): void
        public treeStructureChanged(arg0: javax.swing.event.TreeModelEvent): void
      }
    }
  }
}
