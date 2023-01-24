declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface RequiresTree extends com.sun.source.tree.DirectiveTree {
          isStatic(): boolean
          isTransitive(): boolean
          getModuleName(): com.sun.source.tree.ExpressionTree
        }
      }
    }
  }
}
