declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface ErroneousTree extends com.sun.source.tree.ExpressionTree {
          getErrorTrees(): java.util.List<com.sun.source.tree.Tree>
        }

      }
    }
  }
}
