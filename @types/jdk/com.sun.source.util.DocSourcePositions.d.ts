declare namespace com {
  namespace sun {
    namespace source {
      namespace util {
        interface DocSourcePositions extends com.sun.source.util.SourcePositions {
          getStartPosition(
            arg0: com.sun.source.tree.CompilationUnitTree,
            arg1: com.sun.source.doctree.DocCommentTree,
            arg2: com.sun.source.doctree.DocTree
          ): number
          getEndPosition(
            arg0: com.sun.source.tree.CompilationUnitTree,
            arg1: com.sun.source.doctree.DocCommentTree,
            arg2: com.sun.source.doctree.DocTree
          ): number
        }
      }
    }
  }
}
