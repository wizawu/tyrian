declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface ForLoopTree extends jdk.nashorn.api.tree.ConditionalLoopTree {
          getInitializer(): jdk.nashorn.api.tree.ExpressionTree
          getCondition(): jdk.nashorn.api.tree.ExpressionTree
          getUpdate(): jdk.nashorn.api.tree.ExpressionTree
          getStatement(): jdk.nashorn.api.tree.StatementTree
        }
      }
    }
  }
}
