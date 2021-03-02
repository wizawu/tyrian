declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface LabeledStatementTree extends jdk.nashorn.api.tree.StatementTree {
          getLabel(): java.lang.String
          getStatement(): jdk.nashorn.api.tree.StatementTree
        }

      }
    }
  }
}
