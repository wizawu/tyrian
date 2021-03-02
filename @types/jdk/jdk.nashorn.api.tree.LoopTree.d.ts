declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface LoopTree extends jdk.nashorn.api.tree.StatementTree {
          getStatement(): jdk.nashorn.api.tree.StatementTree
        }

      }
    }
  }
}
