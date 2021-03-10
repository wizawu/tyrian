declare namespace javax {
  namespace swing {
    namespace tree {

      class DefaultTreeModel implements java.io.Serializable, javax.swing.tree.TreeModel {
        protected root: javax.swing.tree.TreeNode
        protected listenerList: javax.swing.event.EventListenerList
        protected asksAllowsChildren: boolean
        public constructor(arg0: javax.swing.tree.TreeNode)
        public constructor(arg0: javax.swing.tree.TreeNode, arg1: boolean | java.lang.Boolean)
        public setAsksAllowsChildren(arg0: boolean | java.lang.Boolean): void
        public asksAllowsChildren(): boolean
        public setRoot(arg0: javax.swing.tree.TreeNode): void
        public getRoot(): java.lang.Object
        public getIndexOfChild(arg0: java.lang.Object | any, arg1: java.lang.Object | any): number
        public getChild(arg0: java.lang.Object | any, arg1: number | java.lang.Integer): java.lang.Object
        public getChildCount(arg0: java.lang.Object | any): number
        public isLeaf(arg0: java.lang.Object | any): boolean
        public reload(): void
        public valueForPathChanged(arg0: javax.swing.tree.TreePath, arg1: java.lang.Object | any): void
        public insertNodeInto(arg0: javax.swing.tree.MutableTreeNode, arg1: javax.swing.tree.MutableTreeNode, arg2: number | java.lang.Integer): void
        public removeNodeFromParent(arg0: javax.swing.tree.MutableTreeNode): void
        public nodeChanged(arg0: javax.swing.tree.TreeNode): void
        public reload(arg0: javax.swing.tree.TreeNode): void
        public nodesWereInserted(arg0: javax.swing.tree.TreeNode, arg1: number[] | java.lang.Integer[]): void
        public nodesWereRemoved(arg0: javax.swing.tree.TreeNode, arg1: number[] | java.lang.Integer[], arg2: java.lang.Object[] | any[]): void
        public nodesChanged(arg0: javax.swing.tree.TreeNode, arg1: number[] | java.lang.Integer[]): void
        public nodeStructureChanged(arg0: javax.swing.tree.TreeNode): void
        public getPathToRoot(arg0: javax.swing.tree.TreeNode): javax.swing.tree.TreeNode[]
        protected getPathToRoot(arg0: javax.swing.tree.TreeNode, arg1: number | java.lang.Integer): javax.swing.tree.TreeNode[]
        public addTreeModelListener(arg0: javax.swing.event.TreeModelListener): void
        public removeTreeModelListener(arg0: javax.swing.event.TreeModelListener): void
        public getTreeModelListeners(): javax.swing.event.TreeModelListener[]
        protected fireTreeNodesChanged(arg0: java.lang.Object | any, arg1: java.lang.Object[] | any[], arg2: number[] | java.lang.Integer[], arg3: java.lang.Object[] | any[]): void
        protected fireTreeNodesInserted(arg0: java.lang.Object | any, arg1: java.lang.Object[] | any[], arg2: number[] | java.lang.Integer[], arg3: java.lang.Object[] | any[]): void
        protected fireTreeNodesRemoved(arg0: java.lang.Object | any, arg1: java.lang.Object[] | any[], arg2: number[] | java.lang.Integer[], arg3: java.lang.Object[] | any[]): void
        protected fireTreeStructureChanged(arg0: java.lang.Object | any, arg1: java.lang.Object[] | any[], arg2: number[] | java.lang.Integer[], arg3: java.lang.Object[] | any[]): void
        public getListeners<T extends java.util.EventListener>(arg0: java.lang.Class<T>): T[]
      }

    }
  }
}
