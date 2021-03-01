declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface CaseTree extends com.sun.source.tree.Tree {

          getExpression(): com.sun.source.tree.ExpressionTree
          getStatements(): java.util.List<com.sun.source.tree.StatementTree>
        }

      }
    }
  }
}
