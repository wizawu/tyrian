declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface AssignmentTree extends jdk.nashorn.api.tree.ExpressionTree {
          getVariable(): jdk.nashorn.api.tree.ExpressionTree
          getExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
