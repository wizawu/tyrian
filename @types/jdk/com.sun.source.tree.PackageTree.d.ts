declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface PackageTree extends com.sun.source.tree.Tree {

          getAnnotations(): java.util.List<com.sun.source.tree.AnnotationTree>
          getPackageName(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
