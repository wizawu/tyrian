declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface MethodTree extends com.sun.source.tree.Tree {
          getModifiers(): com.sun.source.tree.ModifiersTree
          getName(): javax.lang.model.element.Name
          getReturnType(): com.sun.source.tree.Tree
          getTypeParameters(): java.util.List<com.sun.source.tree.TypeParameterTree>
          getParameters(): java.util.List<com.sun.source.tree.VariableTree>
          getReceiverParameter(): com.sun.source.tree.VariableTree
          getThrows(): java.util.List<com.sun.source.tree.ExpressionTree>
          getBody(): com.sun.source.tree.BlockTree
          getDefaultValue(): com.sun.source.tree.Tree
        }

      }
    }
  }
}
