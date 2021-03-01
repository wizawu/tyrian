declare namespace com {
  namespace sun {
    namespace source {
      namespace util {

        class TreePathScanner<R,P> extends com.sun.source.util.TreeScanner<R,P> {

          public constructor()
          public scan(arg0: com.sun.source.util.TreePath, arg1: P): R
          public scan(arg0: com.sun.source.tree.Tree, arg1: P): R
          public getCurrentPath(): com.sun.source.util.TreePath
        }

      }
    }
  }
}
