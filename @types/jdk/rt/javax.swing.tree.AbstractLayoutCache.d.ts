declare namespace javax {
    namespace swing {
        namespace tree {
            abstract class AbstractLayoutCache implements javax.swing.tree.RowMapper {
                protected nodeDimensions: javax.swing.tree.AbstractLayoutCache$NodeDimensions
                protected treeModel: javax.swing.tree.TreeModel
                protected treeSelectionModel: javax.swing.tree.TreeSelectionModel
                protected rootVisible: boolean
                protected rowHeight: int
                public constructor()
                public setNodeDimensions(arg0: javax.swing.tree.AbstractLayoutCache$NodeDimensions): void
                public getNodeDimensions(): javax.swing.tree.AbstractLayoutCache$NodeDimensions
                public setModel(arg0: javax.swing.tree.TreeModel): void
                public getModel(): javax.swing.tree.TreeModel
                public setRootVisible(arg0: boolean): void
                public isRootVisible(): boolean
                public setRowHeight(arg0: int): void
                public getRowHeight(): int
                public setSelectionModel(arg0: javax.swing.tree.TreeSelectionModel): void
                public getSelectionModel(): javax.swing.tree.TreeSelectionModel
                public getPreferredHeight(): int
                public getPreferredWidth(arg0: java.awt.Rectangle): int
                public isExpanded(arg0: javax.swing.tree.TreePath): boolean
                public getBounds(arg0: javax.swing.tree.TreePath, arg1: java.awt.Rectangle): java.awt.Rectangle
                public getPathForRow(arg0: int): javax.swing.tree.TreePath
                public getRowForPath(arg0: javax.swing.tree.TreePath): int
                public getPathClosestTo(arg0: int, arg1: int): javax.swing.tree.TreePath
                public getVisiblePathsFrom(arg0: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
                public getVisibleChildCount(arg0: javax.swing.tree.TreePath): int
                public setExpandedState(arg0: javax.swing.tree.TreePath, arg1: boolean): void
                public getExpandedState(arg0: javax.swing.tree.TreePath): boolean
                public getRowCount(): int
                public invalidateSizes(): void
                public invalidatePathBounds(arg0: javax.swing.tree.TreePath): void
                public treeNodesChanged(arg0: javax.swing.event.TreeModelEvent): void
                public treeNodesInserted(arg0: javax.swing.event.TreeModelEvent): void
                public treeNodesRemoved(arg0: javax.swing.event.TreeModelEvent): void
                public treeStructureChanged(arg0: javax.swing.event.TreeModelEvent): void
                public getRowsForPaths(arg0: javax.swing.tree.TreePath[]): int[]
                protected getNodeDimensions(arg0: java.lang.Object, arg1: int, arg2: int, arg3: boolean, arg4: java.awt.Rectangle): java.awt.Rectangle
                protected isFixedRowHeight(): boolean
                public static class: java.lang.Class<any>
            }
            abstract class AbstractLayoutCache$$Lambda implements javax.swing.tree.RowMapper {
                protected nodeDimensions: javax.swing.tree.AbstractLayoutCache$NodeDimensions
            }
        }
    }
}