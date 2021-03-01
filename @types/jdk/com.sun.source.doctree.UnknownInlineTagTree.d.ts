declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface UnknownInlineTagTree extends com.sun.source.doctree.InlineTagTree {

          getContent(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
