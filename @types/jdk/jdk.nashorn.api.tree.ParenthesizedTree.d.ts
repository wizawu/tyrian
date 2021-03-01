declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ParenthesizedTree extends jdk.nashorn.api.tree.ExpressionTree {

          getExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
