declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface CompoundAssignmentTree extends com.sun.source.tree.ExpressionTree {

          getVariable(): com.sun.source.tree.ExpressionTree
          getExpression(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
