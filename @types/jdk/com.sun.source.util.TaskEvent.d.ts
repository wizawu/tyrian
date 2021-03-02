declare namespace com {
  namespace sun {
    namespace source {
      namespace util {

        class TaskEvent {
          public constructor(arg0: com.sun.source.util.TaskEvent$Kind)
          public constructor(arg0: com.sun.source.util.TaskEvent$Kind, arg1: javax.tools.JavaFileObject)
          public constructor(arg0: com.sun.source.util.TaskEvent$Kind, arg1: com.sun.source.tree.CompilationUnitTree)
          public constructor(arg0: com.sun.source.util.TaskEvent$Kind, arg1: com.sun.source.tree.CompilationUnitTree, arg2: javax.lang.model.element.TypeElement)
          public getKind(): com.sun.source.util.TaskEvent$Kind
          public getSourceFile(): javax.tools.JavaFileObject
          public getCompilationUnit(): com.sun.source.tree.CompilationUnitTree
          public getTypeElement(): javax.lang.model.element.TypeElement
          public toString(): java.lang.String
        }

      }
    }
  }
}
