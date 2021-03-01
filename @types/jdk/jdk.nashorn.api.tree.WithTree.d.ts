declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface WithTree extends jdk.nashorn.api.tree.StatementTree {

          getScope(): jdk.nashorn.api.tree.ExpressionTree
          getStatement(): jdk.nashorn.api.tree.StatementTree
        }

      }
    }
  }
}
