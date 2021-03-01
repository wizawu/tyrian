declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface VariableTree extends jdk.nashorn.api.tree.StatementTree {

          getBinding(): jdk.nashorn.api.tree.ExpressionTree
          getInitializer(): jdk.nashorn.api.tree.ExpressionTree
          isConst(): boolean
          isLet(): boolean
        }

      }
    }
  }
}
