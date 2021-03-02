declare namespace jdk {
  namespace jshell {

    interface SourceCodeAnalysis$SnippetWrapper {
      source(): java.lang.String
      wrapped(): java.lang.String
      fullClassName(): java.lang.String
      kind(): jdk.jshell.Snippet$Kind
      sourceToWrappedPosition(arg0: int): int
      wrappedToSourcePosition(arg0: int): int
    }

  }
}
