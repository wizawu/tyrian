declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {
        interface DocCommentTree extends com.sun.source.doctree.DocTree {
          getFirstSentence(): java.util.List<com.sun.source.doctree.DocTree>
          getFullBody(): java.util.List<com.sun.source.doctree.DocTree>
          getBody(): java.util.List<com.sun.source.doctree.DocTree>
          getBlockTags(): java.util.List<com.sun.source.doctree.DocTree>
          getPreamble(): java.util.List<com.sun.source.doctree.DocTree>
          getPostamble(): java.util.List<com.sun.source.doctree.DocTree>
        }
      }
    }
  }
}
