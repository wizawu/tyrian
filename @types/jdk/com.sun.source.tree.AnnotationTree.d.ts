declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface AnnotationTree extends com.sun.source.tree.ExpressionTree {
          getAnnotationType(): com.sun.source.tree.Tree
          getArguments(): java.util.List<com.sun.source.tree.ExpressionTree>
        }

      }
    }
  }
}
