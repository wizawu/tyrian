declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface SynchronizedTree extends com.sun.source.tree.StatementTree {
          getExpression(): com.sun.source.tree.ExpressionTree
          getBlock(): com.sun.source.tree.BlockTree
        }
      }
    }
  }
}
