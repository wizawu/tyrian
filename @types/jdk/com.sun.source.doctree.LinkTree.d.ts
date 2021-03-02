declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface LinkTree extends com.sun.source.doctree.InlineTagTree {
          getReference(): com.sun.source.doctree.ReferenceTree
          getLabel(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
