declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface TypeParameterTree extends com.sun.source.tree.Tree {
          getName(): javax.lang.model.element.Name
          getBounds(): java.util.List<com.sun.source.tree.Tree>
          getAnnotations(): java.util.List<com.sun.source.tree.AnnotationTree>
        }

      }
    }
  }
}
