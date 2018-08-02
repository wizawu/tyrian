declare namespace javax {
    namespace swing {
        namespace tree {
            class VariableHeightLayoutCache extends javax.swing.tree.AbstractLayoutCache {
                public constructor()
                public setModel(arg0: javax.swing.tree.TreeModel): void
                public setRootVisible(arg0: boolean): void
                public setRowHeight(arg0: int): void
                public setNodeDimensions(arg0: javax.swing.tree.AbstractLayoutCache$NodeDimensions): void
                public setExpandedState(arg0: javax.swing.tree.TreePath, arg1: boolean): void
                public getExpandedState(arg0: javax.swing.tree.TreePath): boolean
                public getBounds(arg0: javax.swing.tree.TreePath, arg1: java.awt.Rectangle): java.awt.Rectangle
                public getPathForRow(arg0: int): javax.swing.tree.TreePath
                public getRowForPath(arg0: javax.swing.tree.TreePath): int
                public getRowCount(): int
                public invalidatePathBounds(arg0: javax.swing.tree.TreePath): void
                public getPreferredHeight(): int
                public getPreferredWidth(arg0: java.awt.Rectangle): int
                public getPathClosestTo(arg0: int, arg1: int): javax.swing.tree.TreePath
                public getVisiblePathsFrom(arg0: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
                public getVisibleChildCount(arg0: javax.swing.tree.TreePath): int
                public invalidateSizes(): void
                public isExpanded(arg0: javax.swing.tree.TreePath): boolean
                public treeNodesChanged(arg0: javax.swing.event.TreeModelEvent): void
                public treeNodesInserted(arg0: javax.swing.event.TreeModelEvent): void
                public treeNodesRemoved(arg0: javax.swing.event.TreeModelEvent): void
                public treeStructureChanged(arg0: javax.swing.event.TreeModelEvent): void
                public static class: java.lang.Class<any>
            }
        }
    }
}