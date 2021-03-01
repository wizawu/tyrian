declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface LabeledStatementTree extends com.sun.source.tree.StatementTree {

          getLabel(): javax.lang.model.element.Name
          getStatement(): com.sun.source.tree.StatementTree
        }

      }
    }
  }
}
