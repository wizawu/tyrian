declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface BlockTree extends jdk.nashorn.api.tree.StatementTree {
          getStatements(): java.util.List<jdk.nashorn.api.tree.StatementTree>
        }

      }
    }
  }
}
