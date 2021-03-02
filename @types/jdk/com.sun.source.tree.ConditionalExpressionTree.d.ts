declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface ConditionalExpressionTree extends com.sun.source.tree.ExpressionTree {
          getCondition(): com.sun.source.tree.ExpressionTree
          getTrueExpression(): com.sun.source.tree.ExpressionTree
          getFalseExpression(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
