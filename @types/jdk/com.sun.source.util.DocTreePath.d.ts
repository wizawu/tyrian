declare namespace com {
  namespace sun {
    namespace source {
      namespace util {
        class DocTreePath implements java.lang.Iterable<com.sun.source.doctree.DocTree> {
          public static getPath(
            arg0: com.sun.source.util.TreePath,
            arg1: com.sun.source.doctree.DocCommentTree,
            arg2: com.sun.source.doctree.DocTree
          ): com.sun.source.util.DocTreePath
          public static getPath(
            arg0: com.sun.source.util.DocTreePath,
            arg1: com.sun.source.doctree.DocTree
          ): com.sun.source.util.DocTreePath
          public constructor(arg0: com.sun.source.util.TreePath, arg1: com.sun.source.doctree.DocCommentTree)
          public constructor(arg0: com.sun.source.util.DocTreePath, arg1: com.sun.source.doctree.DocTree)
          public getTreePath(): com.sun.source.util.TreePath
          public getDocComment(): com.sun.source.doctree.DocCommentTree
          public getLeaf(): com.sun.source.doctree.DocTree
          public getParentPath(): com.sun.source.util.DocTreePath
          public iterator(): java.util.Iterator<com.sun.source.doctree.DocTree>
        }
      }
    }
  }
}
