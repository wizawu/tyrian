declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ConditionalExpressionTree extends jdk.nashorn.api.tree.ExpressionTree {
          getCondition(): jdk.nashorn.api.tree.ExpressionTree
          getTrueExpression(): jdk.nashorn.api.tree.ExpressionTree
          getFalseExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
