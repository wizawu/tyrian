declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface InstanceOfTree extends com.sun.source.tree.ExpressionTree {
          getExpression(): com.sun.source.tree.ExpressionTree
          getType(): com.sun.source.tree.Tree
        }
      }
    }
  }
}
