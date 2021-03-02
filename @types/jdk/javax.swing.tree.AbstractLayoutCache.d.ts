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
        public setRootVisible(arg0: boolean | java.lang.Boolean): void
        public isRootVisible(): boolean
        public setRowHeight(arg0: number | java.lang.Integer): void
        public getRowHeight(): number
        public setSelectionModel(arg0: javax.swing.tree.TreeSelectionModel): void
        public getSelectionModel(): javax.swing.tree.TreeSelectionModel
        public getPreferredHeight(): number
        public getPreferredWidth(arg0: java.awt.Rectangle): number
        public abstract isExpanded(arg0: javax.swing.tree.TreePath): boolean
        public abstract getBounds(arg0: javax.swing.tree.TreePath, arg1: java.awt.Rectangle): java.awt.Rectangle
        public abstract getPathForRow(arg0: number | java.lang.Integer): javax.swing.tree.TreePath
        public abstract getRowForPath(arg0: javax.swing.tree.TreePath): number
        public abstract getPathClosestTo(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.tree.TreePath
        public abstract getVisiblePathsFrom(arg0: javax.swing.tree.TreePath): java.util.Enumeration<javax.swing.tree.TreePath>
        public abstract getVisibleChildCount(arg0: javax.swing.tree.TreePath): number
        public abstract setExpandedState(arg0: javax.swing.tree.TreePath, arg1: boolean | java.lang.Boolean): void
        public abstract getExpandedState(arg0: javax.swing.tree.TreePath): boolean
        public abstract getRowCount(): number
        public abstract invalidateSizes(): void
        public abstract invalidatePathBounds(arg0: javax.swing.tree.TreePath): void
        public abstract treeNodesChanged(arg0: javax.swing.event.TreeModelEvent): void
        public abstract treeNodesInserted(arg0: javax.swing.event.TreeModelEvent): void
        public abstract treeNodesRemoved(arg0: javax.swing.event.TreeModelEvent): void
        public abstract treeStructureChanged(arg0: javax.swing.event.TreeModelEvent): void
        public getRowsForPaths(arg0: javax.swing.tree.TreePath[]): number[]
        protected getNodeDimensions(arg0: java.lang.Object | any, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: boolean | java.lang.Boolean, arg4: java.awt.Rectangle): java.awt.Rectangle
        protected isFixedRowHeight(): boolean
      }

    }
  }
}
