declare namespace com {
  namespace sun {
    namespace source {
      namespace util {

        class TreePath implements java.lang.Iterable<com.sun.source.tree.Tree> {

          public static getPath(arg0: com.sun.source.tree.CompilationUnitTree, arg1: com.sun.source.tree.Tree): com.sun.source.util.TreePath
          public static getPath(arg0: com.sun.source.util.TreePath, arg1: com.sun.source.tree.Tree): com.sun.source.util.TreePath
          public constructor(arg0: com.sun.source.tree.CompilationUnitTree)
          public constructor(arg0: com.sun.source.util.TreePath, arg1: com.sun.source.tree.Tree)
          public getCompilationUnit(): com.sun.source.tree.CompilationUnitTree
          public getLeaf(): com.sun.source.tree.Tree
          public getParentPath(): com.sun.source.util.TreePath
          public iterator(): java.util.Iterator<com.sun.source.tree.Tree>
        }

      }
    }
  }
}
