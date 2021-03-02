declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface UsesTree extends com.sun.source.doctree.BlockTagTree {
          getServiceType(): com.sun.source.doctree.ReferenceTree
          getDescription(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
