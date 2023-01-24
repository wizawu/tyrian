declare namespace com {
  namespace sun {
    namespace source {
      namespace util {
        abstract class Trees {
          public constructor()
          public static instance(arg0: javax.tools.JavaCompiler$CompilationTask): com.sun.source.util.Trees
          public static instance(arg0: javax.annotation.processing.ProcessingEnvironment): com.sun.source.util.Trees
          static getJavacTrees(arg0: java.lang.Class<unknown>, arg1: java.lang.Object | any): com.sun.source.util.Trees
          public abstract getSourcePositions(): com.sun.source.util.SourcePositions
          public abstract getTree(arg0: javax.lang.model.element.Element): com.sun.source.tree.Tree
          public abstract getTree(arg0: javax.lang.model.element.TypeElement): com.sun.source.tree.ClassTree
          public abstract getTree(arg0: javax.lang.model.element.ExecutableElement): com.sun.source.tree.MethodTree
          public abstract getTree(
            arg0: javax.lang.model.element.Element,
            arg1: javax.lang.model.element.AnnotationMirror
          ): com.sun.source.tree.Tree
          public abstract getTree(
            arg0: javax.lang.model.element.Element,
            arg1: javax.lang.model.element.AnnotationMirror,
            arg2: javax.lang.model.element.AnnotationValue
          ): com.sun.source.tree.Tree
          public abstract getPath(
            arg0: com.sun.source.tree.CompilationUnitTree,
            arg1: com.sun.source.tree.Tree
          ): com.sun.source.util.TreePath
          public abstract getPath(arg0: javax.lang.model.element.Element): com.sun.source.util.TreePath
          public abstract getPath(
            arg0: javax.lang.model.element.Element,
            arg1: javax.lang.model.element.AnnotationMirror
          ): com.sun.source.util.TreePath
          public abstract getPath(
            arg0: javax.lang.model.element.Element,
            arg1: javax.lang.model.element.AnnotationMirror,
            arg2: javax.lang.model.element.AnnotationValue
          ): com.sun.source.util.TreePath
          public abstract getElement(arg0: com.sun.source.util.TreePath): javax.lang.model.element.Element
          public abstract getTypeMirror(arg0: com.sun.source.util.TreePath): javax.lang.model.type.TypeMirror
          public abstract getScope(arg0: com.sun.source.util.TreePath): com.sun.source.tree.Scope
          public abstract getDocComment(arg0: com.sun.source.util.TreePath): java.lang.String
          public abstract isAccessible(
            arg0: com.sun.source.tree.Scope,
            arg1: javax.lang.model.element.TypeElement
          ): boolean
          public abstract isAccessible(
            arg0: com.sun.source.tree.Scope,
            arg1: javax.lang.model.element.Element,
            arg2: javax.lang.model.type.DeclaredType
          ): boolean
          public abstract getOriginalType(arg0: javax.lang.model.type.ErrorType): javax.lang.model.type.TypeMirror
          public abstract printMessage(
            arg0: javax.tools.Diagnostic$Kind,
            arg1: string | java.lang.CharSequence,
            arg2: com.sun.source.tree.Tree,
            arg3: com.sun.source.tree.CompilationUnitTree
          ): void
          public abstract getLub(arg0: com.sun.source.tree.CatchTree): javax.lang.model.type.TypeMirror
        }
      }
    }
  }
}
