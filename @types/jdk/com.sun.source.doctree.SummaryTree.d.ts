declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {

        interface SummaryTree extends com.sun.source.doctree.InlineTagTree {

          getSummary(): java.util.List<com.sun.source.doctree.DocTree>
        }

      }
    }
  }
}
