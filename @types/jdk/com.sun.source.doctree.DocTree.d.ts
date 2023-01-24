declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {
        interface DocTree {
          getKind(): com.sun.source.doctree.DocTree$Kind
          accept<R, D>(arg0: com.sun.source.doctree.DocTreeVisitor<R, D>, arg1: D): R
        }
      }
    }
  }
}
