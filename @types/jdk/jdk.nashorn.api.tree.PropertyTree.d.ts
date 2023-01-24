declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface PropertyTree extends jdk.nashorn.api.tree.Tree {
          getKey(): jdk.nashorn.api.tree.ExpressionTree
          getValue(): jdk.nashorn.api.tree.ExpressionTree
          getGetter(): jdk.nashorn.api.tree.FunctionExpressionTree
          getSetter(): jdk.nashorn.api.tree.FunctionExpressionTree
          isStatic(): boolean
          isComputed(): boolean
        }
      }
    }
  }
}
