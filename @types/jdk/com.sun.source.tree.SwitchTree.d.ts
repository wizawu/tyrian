declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface SwitchTree extends com.sun.source.tree.StatementTree {
          getExpression(): com.sun.source.tree.ExpressionTree
          getCases(): java.util.List<com.sun.source.tree.CaseTree>
        }

      }
    }
  }
}
