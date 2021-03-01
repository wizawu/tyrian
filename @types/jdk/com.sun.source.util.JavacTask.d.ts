declare namespace com {
  namespace sun {
    namespace source {
      namespace util {

        abstract class JavacTask implements javax.tools.JavaCompiler$CompilationTask {

          public constructor()
          public static instance(arg0: javax.annotation.processing.ProcessingEnvironment): com.sun.source.util.JavacTask
          public abstract parse(): java.lang.Iterable<com.sun.source.tree.CompilationUnitTree>
          public abstract analyze(): java.lang.Iterable<javax.lang.model.element.Element>
          public abstract generate(): java.lang.Iterable<javax.tools.JavaFileObject>
          public abstract setTaskListener(arg0: com.sun.source.util.TaskListener): void
          public abstract addTaskListener(arg0: com.sun.source.util.TaskListener): void
          public abstract removeTaskListener(arg0: com.sun.source.util.TaskListener): void
          public abstract getTypeMirror(arg0: java.lang.Iterable<com.sun.source.tree.Tree>): javax.lang.model.type.TypeMirror
          public abstract getElements(): javax.lang.model.util.Elements
          public abstract getTypes(): javax.lang.model.util.Types
        }

      }
    }
  }
}
