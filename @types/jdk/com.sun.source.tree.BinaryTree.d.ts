declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface BinaryTree extends com.sun.source.tree.ExpressionTree {
          getLeftOperand(): com.sun.source.tree.ExpressionTree
          getRightOperand(): com.sun.source.tree.ExpressionTree
        }
      }
    }
  }
}
