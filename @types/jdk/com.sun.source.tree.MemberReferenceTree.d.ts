declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface MemberReferenceTree extends com.sun.source.tree.ExpressionTree {
          getMode(): com.sun.source.tree.MemberReferenceTree$ReferenceMode
          getQualifierExpression(): com.sun.source.tree.ExpressionTree
          getName(): javax.lang.model.element.Name
          getTypeArguments(): java.util.List<com.sun.source.tree.ExpressionTree>
        }
      }
    }
  }
}
