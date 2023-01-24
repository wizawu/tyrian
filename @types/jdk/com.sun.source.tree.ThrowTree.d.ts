declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface ThrowTree extends com.sun.source.tree.StatementTree {
          getExpression(): com.sun.source.tree.ExpressionTree
        }
      }
    }
  }
}
