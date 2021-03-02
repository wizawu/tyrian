declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ConditionalLoopTree extends jdk.nashorn.api.tree.LoopTree {
          getCondition(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
