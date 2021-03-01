declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface NewTree extends jdk.nashorn.api.tree.ExpressionTree {

          getConstructorExpression(): jdk.nashorn.api.tree.ExpressionTree
        }

      }
    }
  }
}
