declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface SwitchTree extends jdk.nashorn.api.tree.StatementTree {
          getExpression(): jdk.nashorn.api.tree.ExpressionTree
          getCases(): java.util.List<jdk.nashorn.api.tree.CaseTree>
        }

      }
    }
  }
}
