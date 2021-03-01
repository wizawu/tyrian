declare namespace jdk {
  namespace jshell {

    class SnippetEvent {

      constructor(arg0: jdk.jshell.Snippet, arg1: jdk.jshell.Snippet$Status, arg2: jdk.jshell.Snippet$Status, arg3: boolean, arg4: jdk.jshell.Snippet, arg5: java.lang.String, arg6: jdk.jshell.JShellException)
      public snippet(): jdk.jshell.Snippet
      public previousStatus(): jdk.jshell.Snippet$Status
      public status(): jdk.jshell.Snippet$Status
      public isSignatureChange(): boolean
      public causeSnippet(): jdk.jshell.Snippet
      public exception(): jdk.jshell.JShellException
      public value(): java.lang.String
      public toString(): java.lang.String
    }

  }
}
