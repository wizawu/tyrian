declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface MethodInvocationTree extends com.sun.source.tree.ExpressionTree {
          getTypeArguments(): java.util.List<com.sun.source.tree.Tree>
          getMethodSelect(): com.sun.source.tree.ExpressionTree
          getArguments(): java.util.List<com.sun.source.tree.ExpressionTree>
        }

      }
    }
  }
}
