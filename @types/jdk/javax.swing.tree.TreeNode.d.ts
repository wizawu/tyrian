declare namespace javax {
  namespace swing {
    namespace tree {

      interface TreeNode {
        getChildAt(arg0: number | java.lang.Integer): javax.swing.tree.TreeNode
        getChildCount(): number
        getParent(): javax.swing.tree.TreeNode
        getIndex(arg0: javax.swing.tree.TreeNode): number
        getAllowsChildren(): boolean
        isLeaf(): boolean
        children(): java.util.Enumeration<javax.swing.tree.TreeNode>
      }

    }
  }
}
