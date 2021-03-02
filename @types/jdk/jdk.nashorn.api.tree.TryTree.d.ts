declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface TryTree extends jdk.nashorn.api.tree.StatementTree {
          getBlock(): jdk.nashorn.api.tree.BlockTree
          getCatches(): java.util.List<jdk.nashorn.api.tree.CatchTree>
          getFinallyBlock(): jdk.nashorn.api.tree.BlockTree
        }

      }
    }
  }
}
