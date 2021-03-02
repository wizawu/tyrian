declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface VersionTree extends com.sun.source.doctree.BlockTagTree {
          getBody(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
