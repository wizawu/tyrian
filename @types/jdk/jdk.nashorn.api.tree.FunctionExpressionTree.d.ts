declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface FunctionExpressionTree extends jdk.nashorn.api.tree.ExpressionTree {

          getName(): jdk.nashorn.api.tree.IdentifierTree
          getParameters(): java.util.List<jdk.nashorn.api.tree.ExpressionTree>
          getBody(): jdk.nashorn.api.tree.Tree
          isStrict(): boolean
          isArrow(): boolean
          isGenerator(): boolean
        }

      }
    }
  }
}
