declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface ExportsTree extends com.sun.source.tree.DirectiveTree {
          getPackageName(): com.sun.source.tree.ExpressionTree
          getModuleNames(): java.util.List<com.sun.source.tree.ExpressionTree>
        }

      }
    }
  }
}
