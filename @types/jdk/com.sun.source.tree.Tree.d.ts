declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface Tree {
          getKind(): com.sun.source.tree.Tree$Kind
          accept<R, D>(arg0: com.sun.source.tree.TreeVisitor<R, D>, arg1: D): R
        }
      }
    }
  }
}
