declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface ForLoopTree extends com.sun.source.tree.StatementTree {
          getInitializer(): java.util.List<com.sun.source.tree.StatementTree>
          getCondition(): com.sun.source.tree.ExpressionTree
          getUpdate(): java.util.List<com.sun.source.tree.ExpressionStatementTree>
          getStatement(): com.sun.source.tree.StatementTree
        }
      }
    }
  }
}
