declare namespace javax {
  namespace swing {
    namespace tree {

      interface MutableTreeNode extends javax.swing.tree.TreeNode {
        insert(arg0: javax.swing.tree.MutableTreeNode, arg1: int): void
        remove(arg0: int): void
        remove(arg0: javax.swing.tree.MutableTreeNode): void
        setUserObject(arg0: java.lang.Object): void
        removeFromParent(): void
        setParent(arg0: javax.swing.tree.MutableTreeNode): void
      }

    }
  }
}
