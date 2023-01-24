declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {
        interface IndexTree extends com.sun.source.doctree.InlineTagTree {
          getSearchTerm(): com.sun.source.doctree.DocTree
          getDescription(): java.util.List<com.sun.source.doctree.DocTree>
        }
      }
    }
  }
}
