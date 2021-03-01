declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface NewArrayTree extends com.sun.source.tree.ExpressionTree {

          getType(): com.sun.source.tree.Tree
          getDimensions(): java.util.List<com.sun.source.tree.ExpressionTree>
          getInitializers(): java.util.List<com.sun.source.tree.ExpressionTree>
          getAnnotations(): java.util.List<com.sun.source.tree.AnnotationTree>
          getDimAnnotations(): java.util.List<java.util.List<com.sun.source.tree.AnnotationTree>>
        }

      }
    }
  }
}
