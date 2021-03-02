declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface IfTree extends jdk.nashorn.api.tree.StatementTree {
          getCondition(): jdk.nashorn.api.tree.ExpressionTree
          getThenStatement(): jdk.nashorn.api.tree.StatementTree
          getElseStatement(): jdk.nashorn.api.tree.StatementTree
        }

      }
    }
  }
}
