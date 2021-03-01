declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface CaseTree extends jdk.nashorn.api.tree.Tree {

          getExpression(): jdk.nashorn.api.tree.ExpressionTree
          getStatements(): java.util.List<jdk.nashorn.api.tree.StatementTree>
        }

      }
    }
  }
}
