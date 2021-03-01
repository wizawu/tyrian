declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface ThrowsTree extends com.sun.source.doctree.BlockTagTree {

          getExceptionName(): com.sun.source.doctree.ReferenceTree
          getDescription(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
