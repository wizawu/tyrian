declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface MemberSelectTree extends com.sun.source.tree.ExpressionTree {

          getExpression(): com.sun.source.tree.ExpressionTree
          getIdentifier(): javax.lang.model.element.Name
        }

      }
    }
  }
}
