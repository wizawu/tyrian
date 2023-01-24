declare namespace com {
  namespace sun {
    namespace source {
      namespace util {
        interface SourcePositions {
          getStartPosition(arg0: com.sun.source.tree.CompilationUnitTree, arg1: com.sun.source.tree.Tree): number
          getEndPosition(arg0: com.sun.source.tree.CompilationUnitTree, arg1: com.sun.source.tree.Tree): number
        }
      }
    }
  }
}
