declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface PrimitiveTypeTree extends com.sun.source.tree.Tree {

          getPrimitiveTypeKind(): javax.lang.model.type.TypeKind
        }

      }
    }
  }
}
