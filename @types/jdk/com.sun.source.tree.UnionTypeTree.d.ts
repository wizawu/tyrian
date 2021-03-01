declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface UnionTypeTree extends com.sun.source.tree.Tree {

          getTypeAlternatives(): java.util.List<com.sun.source.tree.Tree>
        }

      }
    }
  }
}
