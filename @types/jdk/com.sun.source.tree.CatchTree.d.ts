declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface CatchTree extends com.sun.source.tree.Tree {
          getParameter(): com.sun.source.tree.VariableTree
          getBlock(): com.sun.source.tree.BlockTree
        }

      }
    }
  }
}
