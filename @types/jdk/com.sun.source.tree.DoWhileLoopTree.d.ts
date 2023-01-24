declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface DoWhileLoopTree extends com.sun.source.tree.StatementTree {
          getCondition(): com.sun.source.tree.ExpressionTree
          getStatement(): com.sun.source.tree.StatementTree
        }
      }
    }
  }
}
