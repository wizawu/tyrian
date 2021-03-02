declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface ClassTree extends com.sun.source.tree.StatementTree {
          getModifiers(): com.sun.source.tree.ModifiersTree
          getSimpleName(): javax.lang.model.element.Name
          getTypeParameters(): java.util.List<com.sun.source.tree.TypeParameterTree>
          getExtendsClause(): com.sun.source.tree.Tree
          getImplementsClause(): java.util.List<com.sun.source.tree.Tree>
          getMembers(): java.util.List<com.sun.source.tree.Tree>
        }

      }
    }
  }
}
