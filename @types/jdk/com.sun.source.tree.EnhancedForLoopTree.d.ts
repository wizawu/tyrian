declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface EnhancedForLoopTree extends com.sun.source.tree.StatementTree {
          getVariable(): com.sun.source.tree.VariableTree
          getExpression(): com.sun.source.tree.ExpressionTree
          getStatement(): com.sun.source.tree.StatementTree
        }

      }
    }
  }
}
