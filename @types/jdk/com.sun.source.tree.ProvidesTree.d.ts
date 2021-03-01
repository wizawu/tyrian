declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface ProvidesTree extends com.sun.source.tree.DirectiveTree {

          getServiceName(): com.sun.source.tree.ExpressionTree
          getImplementationNames(): java.util.List<com.sun.source.tree.ExpressionTree>
        }

      }
    }
  }
}
