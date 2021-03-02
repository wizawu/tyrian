declare namespace com {
  namespace sun {
    namespace source {
      namespace util {

        class DocTreePathScanner<R,P> extends com.sun.source.util.DocTreeScanner<R,P> {
          public constructor()
          public scan(arg0: com.sun.source.util.DocTreePath, arg1: P): R
          public scan(arg0: com.sun.source.doctree.DocTree, arg1: P): R
          public getCurrentPath(): com.sun.source.util.DocTreePath
        }

      }
    }
  }
}
