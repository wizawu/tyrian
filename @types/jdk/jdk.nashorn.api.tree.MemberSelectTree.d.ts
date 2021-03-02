declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface MemberSelectTree extends jdk.nashorn.api.tree.ExpressionTree {
          getExpression(): jdk.nashorn.api.tree.ExpressionTree
          getIdentifier(): java.lang.String
        }

      }
    }
  }
}
