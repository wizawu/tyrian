declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface NewClassTree extends com.sun.source.tree.ExpressionTree {
          getEnclosingExpression(): com.sun.source.tree.ExpressionTree
          getTypeArguments(): java.util.List<com.sun.source.tree.Tree>
          getIdentifier(): com.sun.source.tree.ExpressionTree
          getArguments(): java.util.List<com.sun.source.tree.ExpressionTree>
          getClassBody(): com.sun.source.tree.ClassTree
        }

      }
    }
  }
}
