declare namespace javax {
  namespace swing {
    namespace tree {
      class DefaultMutableTreeNode
        implements java.lang.Cloneable, javax.swing.tree.MutableTreeNode, java.io.Serializable
      {
        public static readonly EMPTY_ENUMERATION: java.util.Enumeration<javax.swing.tree.TreeNode>
        protected parent: javax.swing.tree.MutableTreeNode
        protected children: java.util.Vector<javax.swing.tree.TreeNode>
        protected userObject: java.lang.Object
        protected allowsChildren: boolean
        public constructor()
        public constructor(arg0: java.lang.Object | any)
        public constructor(arg0: java.lang.Object | any, arg1: boolean | java.lang.Boolean)
        public insert(arg0: javax.swing.tree.MutableTreeNode, arg1: number | java.lang.Integer): void
        public remove(arg0: number | java.lang.Integer): void
        public setParent(arg0: javax.swing.tree.MutableTreeNode): void
        public getParent(): javax.swing.tree.TreeNode
        public getChildAt(arg0: number | java.lang.Integer): javax.swing.tree.TreeNode
        public getChildCount(): number
        public getIndex(arg0: javax.swing.tree.TreeNode): number
        public children(): java.util.Enumeration<javax.swing.tree.TreeNode>
        public setAllowsChildren(arg0: boolean | java.lang.Boolean): void
        public getAllowsChildren(): boolean
        public setUserObject(arg0: java.lang.Object | any): void
        public getUserObject(): java.lang.Object
        public removeFromParent(): void
        public remove(arg0: javax.swing.tree.MutableTreeNode): void
        public removeAllChildren(): void
        public add(arg0: javax.swing.tree.MutableTreeNode): void
        public isNodeAncestor(arg0: javax.swing.tree.TreeNode): boolean
        public isNodeDescendant(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
        public getSharedAncestor(arg0: javax.swing.tree.DefaultMutableTreeNode): javax.swing.tree.TreeNode
        public isNodeRelated(arg0: javax.swing.tree.DefaultMutableTreeNode): boolean
        public getDepth(): number
        public getLevel(): number
        public getPath(): javax.swing.tree.TreeNode[]
        protected getPathToRoot(
          arg0: javax.swing.tree.TreeNode,
          arg1: number | java.lang.Integer
        ): javax.swing.tree.TreeNode[]
        public getUserObjectPath(): java.lang.Object[]
        public getRoot(): javax.swing.tree.TreeNode
        public isRoot(): boolean
        public getNextNode(): javax.swing.tree.DefaultMutableTreeNode
        public getPreviousNode(): javax.swing.tree.DefaultMutableTreeNode
        public preorderEnumeration(): java.util.Enumeration<javax.swing.tree.TreeNode>
        public postorderEnumeration(): java.util.Enumeration<javax.swing.tree.TreeNode>
        public breadthFirstEnumeration(): java.util.Enumeration<javax.swing.tree.TreeNode>
        public depthFirstEnumeration(): java.util.Enumeration<javax.swing.tree.TreeNode>
        public pathFromAncestorEnumeration(
          arg0: javax.swing.tree.TreeNode
        ): java.util.Enumeration<javax.swing.tree.TreeNode>
        public isNodeChild(arg0: javax.swing.tree.TreeNode): boolean
        public getFirstChild(): javax.swing.tree.TreeNode
        public getLastChild(): javax.swing.tree.TreeNode
        public getChildAfter(arg0: javax.swing.tree.TreeNode): javax.swing.tree.TreeNode
        public getChildBefore(arg0: javax.swing.tree.TreeNode): javax.swing.tree.TreeNode
        public isNodeSibling(arg0: javax.swing.tree.TreeNode): boolean
        public getSiblingCount(): number
        public getNextSibling(): javax.swing.tree.DefaultMutableTreeNode
        public getPreviousSibling(): javax.swing.tree.DefaultMutableTreeNode
        public isLeaf(): boolean
        public getFirstLeaf(): javax.swing.tree.DefaultMutableTreeNode
        public getLastLeaf(): javax.swing.tree.DefaultMutableTreeNode
        public getNextLeaf(): javax.swing.tree.DefaultMutableTreeNode
        public getPreviousLeaf(): javax.swing.tree.DefaultMutableTreeNode
        public getLeafCount(): number
        public toString(): java.lang.String
        public clone(): java.lang.Object
      }
    }
  }
}
