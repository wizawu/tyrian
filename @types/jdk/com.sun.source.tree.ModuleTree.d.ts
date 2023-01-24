declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface ModuleTree extends com.sun.source.tree.Tree {
          getAnnotations(): java.util.List<com.sun.source.tree.AnnotationTree>
          getModuleType(): com.sun.source.tree.ModuleTree$ModuleKind
          getName(): com.sun.source.tree.ExpressionTree
          getDirectives(): java.util.List<com.sun.source.tree.DirectiveTree>
        }
      }
    }
  }
}
