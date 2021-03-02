declare namespace javax {
  namespace swing {

    class JTree$DynamicUtilTreeNode extends javax.swing.tree.DefaultMutableTreeNode {
      protected hasChildren: boolean
      protected childValue: java.lang.Object
      protected loadedChildren: boolean
      public static createChildren(arg0: javax.swing.tree.DefaultMutableTreeNode, arg1: java.lang.Object): void
      public constructor(arg0: java.lang.Object, arg1: java.lang.Object)
      public isLeaf(): boolean
      public getChildCount(): int
      protected loadChildren(): void
      public getChildAt(arg0: int): javax.swing.tree.TreeNode
      public children(): java.util.Enumeration<javax.swing.tree.TreeNode>
    }

  }
}
