declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ExpressionStatementTree extends jdk.nashorn.api.tree.StatementTree {

          getExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
