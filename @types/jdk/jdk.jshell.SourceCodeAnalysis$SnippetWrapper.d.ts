declare namespace jdk {
  namespace jshell {
    interface SourceCodeAnalysis$SnippetWrapper {
      source(): java.lang.String
      wrapped(): java.lang.String
      fullClassName(): java.lang.String
      kind(): jdk.jshell.Snippet$Kind
      sourceToWrappedPosition(arg0: number | java.lang.Integer): number
      wrappedToSourcePosition(arg0: number | java.lang.Integer): number
    }
  }
}
