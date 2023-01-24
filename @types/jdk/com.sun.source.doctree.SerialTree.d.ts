declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {
        interface SerialTree extends com.sun.source.doctree.BlockTagTree {
          getDescription(): java.util.List<com.sun.source.doctree.DocTree>
        }
      }
    }
  }
}
