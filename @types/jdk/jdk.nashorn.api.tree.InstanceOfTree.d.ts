declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface InstanceOfTree extends jdk.nashorn.api.tree.ExpressionTree {
          getExpression(): jdk.nashorn.api.tree.ExpressionTree
          getType(): jdk.nashorn.api.tree.Tree
        }
      }
    }
  }
}
