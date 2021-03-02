declare namespace jdk {
  namespace jshell {

    class UnresolvedReferenceException extends jdk.jshell.JShellException {
      readonly snippet: jdk.jshell.DeclarationSnippet
      constructor(arg0: jdk.jshell.DeclarationSnippet, arg1: java.lang.StackTraceElement[])
      public getSnippet(): jdk.jshell.DeclarationSnippet
    }

  }
}
