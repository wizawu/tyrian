declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface LambdaExpressionTree extends com.sun.source.tree.ExpressionTree {
          getParameters(): java.util.List<com.sun.source.tree.VariableTree>
          getBody(): com.sun.source.tree.Tree
          getBodyKind(): com.sun.source.tree.LambdaExpressionTree$BodyKind
        }

      }
    }
  }
}
