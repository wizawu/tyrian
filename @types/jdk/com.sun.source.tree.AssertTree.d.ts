declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface AssertTree extends com.sun.source.tree.StatementTree {
          getCondition(): com.sun.source.tree.ExpressionTree
          getDetail(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
