declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface BinaryTree extends jdk.nashorn.api.tree.ExpressionTree {
          getLeftOperand(): jdk.nashorn.api.tree.ExpressionTree
          getRightOperand(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
