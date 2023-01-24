declare namespace jdk {
  namespace jshell {
    abstract class DeclarationSnippet extends jdk.jshell.PersistentSnippet {
      constructor(
        arg0: jdk.jshell.Key$DeclarationKey,
        arg1: java.lang.String | string,
        arg2: jdk.jshell.Wrap,
        arg3: java.lang.String | string,
        arg4: jdk.jshell.Snippet$SubKind,
        arg5: jdk.jshell.Wrap,
        arg6: java.util.Collection<java.lang.String>,
        arg7: java.util.Collection<java.lang.String>,
        arg8: jdk.jshell.DiagList
      )
      corralled(): jdk.jshell.Wrap
      declareReferences(): java.util.Collection<java.lang.String>
      bodyReferences(): java.util.Collection<java.lang.String>
      importLine(arg0: jdk.jshell.JShell): java.lang.String
    }
  }
}
