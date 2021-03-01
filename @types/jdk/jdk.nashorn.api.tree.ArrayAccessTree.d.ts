declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ArrayAccessTree extends jdk.nashorn.api.tree.ExpressionTree {

          getExpression(): jdk.nashorn.api.tree.ExpressionTree
          getIndex(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
