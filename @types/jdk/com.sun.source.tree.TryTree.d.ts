declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface TryTree extends com.sun.source.tree.StatementTree {
          getBlock(): com.sun.source.tree.BlockTree
          getCatches(): java.util.List<com.sun.source.tree.CatchTree>
          getFinallyBlock(): com.sun.source.tree.BlockTree
          getResources(): java.util.List<com.sun.source.tree.Tree>
        }
      }
    }
  }
}
