declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface ImportTree extends com.sun.source.tree.Tree {
          isStatic(): boolean
          getQualifiedIdentifier(): com.sun.source.tree.Tree
        }
      }
    }
  }
}
