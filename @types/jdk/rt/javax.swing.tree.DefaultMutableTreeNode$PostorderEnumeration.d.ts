declare namespace javax {
    namespace swing {
        namespace tree {
class DefaultMutableTreeNode$PostorderEnumeration implements java.util.Enumeration<javax.swing.tree.TreeNode> {
    protected root: javax.swing.tree.TreeNode
    protected children: java.util.Enumeration<javax.swing.tree.TreeNode>
    protected subtree: java.util.Enumeration<javax.swing.tree.TreeNode>
    public constructor(arg0: javax.swing.tree.DefaultMutableTreeNode, arg1: javax.swing.tree.TreeNode)
    public hasMoreElements(): boolean
    public nextElement(): javax.swing.tree.TreeNode
    public nextElement(): java.lang.Object
    public static class: java.lang.Class<any>
}

        }
    }
}