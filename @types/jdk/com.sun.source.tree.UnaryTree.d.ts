declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface UnaryTree extends com.sun.source.tree.ExpressionTree {
          getExpression(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
