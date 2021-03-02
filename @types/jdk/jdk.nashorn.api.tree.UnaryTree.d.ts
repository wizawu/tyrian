declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface UnaryTree extends jdk.nashorn.api.tree.ExpressionTree {
          getExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
