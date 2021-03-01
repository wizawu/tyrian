declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface CatchTree extends jdk.nashorn.api.tree.Tree {

          getParameter(): jdk.nashorn.api.tree.ExpressionTree
          getBlock(): jdk.nashorn.api.tree.BlockTree
          getCondition(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
