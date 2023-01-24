declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface IfTree extends com.sun.source.tree.StatementTree {
          getCondition(): com.sun.source.tree.ExpressionTree
          getThenStatement(): com.sun.source.tree.StatementTree
          getElseStatement(): com.sun.source.tree.StatementTree
        }
      }
    }
  }
}
