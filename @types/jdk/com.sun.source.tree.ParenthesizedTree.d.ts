declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface ParenthesizedTree extends com.sun.source.tree.ExpressionTree {
          getExpression(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
