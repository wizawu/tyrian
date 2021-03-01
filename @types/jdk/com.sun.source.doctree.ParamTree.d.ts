declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface ParamTree extends com.sun.source.doctree.BlockTagTree {

          isTypeParameter(): boolean
          getName(): com.sun.source.doctree.IdentifierTree
          getDescription(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
