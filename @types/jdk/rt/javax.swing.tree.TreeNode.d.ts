declare namespace javax {
    namespace swing {
        namespace tree {
            interface TreeNode {
                getChildAt(arg0: int): javax.swing.tree.TreeNode
                getChildCount(): int
                getParent(): javax.swing.tree.TreeNode
                getIndex(arg0: javax.swing.tree.TreeNode): int
                getAllowsChildren(): boolean
                isLeaf(): boolean
                children(): java.util.Enumeration
            }
        }
    }
}