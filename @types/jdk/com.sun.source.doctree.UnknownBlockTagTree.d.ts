declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface UnknownBlockTagTree extends com.sun.source.doctree.BlockTagTree {
          getContent(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
