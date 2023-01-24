declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface TypeCastTree extends com.sun.source.tree.ExpressionTree {
          getType(): com.sun.source.tree.Tree
          getExpression(): com.sun.source.tree.ExpressionTree
        }
      }
    }
  }
}
