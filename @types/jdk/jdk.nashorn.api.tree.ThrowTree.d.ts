declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ThrowTree extends jdk.nashorn.api.tree.StatementTree {

          getExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
