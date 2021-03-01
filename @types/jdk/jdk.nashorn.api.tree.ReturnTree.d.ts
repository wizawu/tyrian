declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ReturnTree extends jdk.nashorn.api.tree.StatementTree {

          getExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
