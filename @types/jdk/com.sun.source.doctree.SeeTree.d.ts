declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface SeeTree extends com.sun.source.doctree.BlockTagTree {
          getReference(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
