declare namespace com {
  namespace sun {
    namespace source {
      namespace util {

        abstract class DocTrees extends com.sun.source.util.Trees {
          public constructor()
          public static instance(arg0: javax.tools.JavaCompiler$CompilationTask): com.sun.source.util.DocTrees
          public static instance(arg0: javax.annotation.processing.ProcessingEnvironment): com.sun.source.util.DocTrees
          public abstract getBreakIterator(): java.text.BreakIterator
          public abstract getDocCommentTree(arg0: com.sun.source.util.TreePath): com.sun.source.doctree.DocCommentTree
          public abstract getDocCommentTree(arg0: javax.lang.model.element.Element): com.sun.source.doctree.DocCommentTree
          public abstract getDocCommentTree(arg0: javax.tools.FileObject): com.sun.source.doctree.DocCommentTree
          public abstract getDocCommentTree(arg0: javax.lang.model.element.Element, arg1: java.lang.String | string): com.sun.source.doctree.DocCommentTree
          public abstract getDocTreePath(arg0: javax.tools.FileObject, arg1: javax.lang.model.element.PackageElement): com.sun.source.util.DocTreePath
          public abstract getElement(arg0: com.sun.source.util.DocTreePath): javax.lang.model.element.Element
          public abstract getFirstSentence(arg0: java.util.List<com.sun.source.doctree.DocTree>): java.util.List<com.sun.source.doctree.DocTree>
          public abstract getSourcePositions(): com.sun.source.util.DocSourcePositions
          public abstract printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence, arg2: com.sun.source.doctree.DocTree, arg3: com.sun.source.doctree.DocCommentTree, arg4: com.sun.source.tree.CompilationUnitTree): void
          public abstract setBreakIterator(arg0: java.text.BreakIterator): void
          public abstract getDocTreeFactory(): com.sun.source.util.DocTreeFactory
          public getSourcePositions(): com.sun.source.util.SourcePositions
        }

      }
    }
  }
}
