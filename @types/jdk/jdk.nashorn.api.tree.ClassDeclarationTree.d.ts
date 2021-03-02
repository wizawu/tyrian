declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ClassDeclarationTree extends jdk.nashorn.api.tree.StatementTree {
          getName(): jdk.nashorn.api.tree.IdentifierTree
          getClassHeritage(): jdk.nashorn.api.tree.ExpressionTree
          getConstructor(): jdk.nashorn.api.tree.PropertyTree
          getClassElements(): java.util.List<jdk.nashorn.api.tree.PropertyTree>
        }

      }
    }
  }
}
