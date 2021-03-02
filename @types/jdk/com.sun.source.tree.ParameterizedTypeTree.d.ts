declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface ParameterizedTypeTree extends com.sun.source.tree.Tree {
          getType(): com.sun.source.tree.Tree
          getTypeArguments(): java.util.List<com.sun.source.tree.Tree>
        }

      }
    }
  }
}
