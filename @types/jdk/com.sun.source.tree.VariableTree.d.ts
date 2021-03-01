declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface VariableTree extends com.sun.source.tree.StatementTree {

          getModifiers(): com.sun.source.tree.ModifiersTree
          getName(): javax.lang.model.element.Name
          getNameExpression(): com.sun.source.tree.ExpressionTree
          getType(): com.sun.source.tree.Tree
          getInitializer(): com.sun.source.tree.ExpressionTree
        }

      }
    }
  }
}
