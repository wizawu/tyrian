declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface Tree {
          getStartPosition(): number
          getEndPosition(): number
          getKind(): jdk.nashorn.api.tree.Tree$Kind
          accept<R, D>(arg0: jdk.nashorn.api.tree.TreeVisitor<R, D>, arg1: D): R
        }
      }
    }
  }
}
