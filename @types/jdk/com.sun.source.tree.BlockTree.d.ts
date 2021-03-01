declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface BlockTree extends com.sun.source.tree.StatementTree {

          isStatic(): boolean
          getStatements(): java.util.List<com.sun.source.tree.StatementTree>
        }

      }
    }
  }
}
