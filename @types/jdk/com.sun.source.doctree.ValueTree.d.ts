declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface ValueTree extends com.sun.source.doctree.InlineTagTree {
          getReference(): com.sun.source.doctree.ReferenceTree
        }

      }
    }
  }
}
