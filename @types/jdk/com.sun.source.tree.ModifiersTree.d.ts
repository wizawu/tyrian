declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface ModifiersTree extends com.sun.source.tree.Tree {
          getFlags(): java.util.Set<javax.lang.model.element.Modifier>
          getAnnotations(): java.util.List<com.sun.source.tree.AnnotationTree>
        }
      }
    }
  }
}
