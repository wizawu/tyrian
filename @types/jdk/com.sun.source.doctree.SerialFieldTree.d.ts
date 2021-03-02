declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface SerialFieldTree extends com.sun.source.doctree.BlockTagTree {
          getName(): com.sun.source.doctree.IdentifierTree
          getType(): com.sun.source.doctree.ReferenceTree
          getDescription(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
