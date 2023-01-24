declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface FunctionDeclarationTree extends jdk.nashorn.api.tree.StatementTree {
          getName(): jdk.nashorn.api.tree.IdentifierTree
          getParameters(): java.util.List<jdk.nashorn.api.tree.ExpressionTree>
          getBody(): jdk.nashorn.api.tree.BlockTree
          isStrict(): boolean
          isGenerator(): boolean
        }
      }
    }
  }
}
