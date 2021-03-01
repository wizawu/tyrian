declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface AnnotatedTypeTree extends com.sun.source.tree.ExpressionTree {

          getAnnotations(): java.util.List<com.sun.source.tree.AnnotationTree>
          getUnderlyingType(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
