declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface SpreadTree extends jdk.nashorn.api.tree.ExpressionTree {
          getExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
