declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface WhileLoopTree extends jdk.nashorn.api.tree.ConditionalLoopTree {
          getCondition(): jdk.nashorn.api.tree.ExpressionTree
          getStatement(): jdk.nashorn.api.tree.StatementTree
        }
      }
    }
  }
}
