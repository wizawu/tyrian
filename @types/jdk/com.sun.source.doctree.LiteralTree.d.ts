declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {
        interface LiteralTree extends com.sun.source.doctree.InlineTagTree {
          getBody(): com.sun.source.doctree.TextTree
        }
      }
    }
  }
}
