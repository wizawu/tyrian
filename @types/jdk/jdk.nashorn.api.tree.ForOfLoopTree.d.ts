declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface ForOfLoopTree extends jdk.nashorn.api.tree.LoopTree {
          getVariable(): jdk.nashorn.api.tree.ExpressionTree
          getExpression(): jdk.nashorn.api.tree.ExpressionTree
          getStatement(): jdk.nashorn.api.tree.StatementTree
        }
      }
    }
  }
}
