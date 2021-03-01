declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface ArrayAccessTree extends com.sun.source.tree.ExpressionTree {

          getExpression(): com.sun.source.tree.ExpressionTree
          getIndex(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
