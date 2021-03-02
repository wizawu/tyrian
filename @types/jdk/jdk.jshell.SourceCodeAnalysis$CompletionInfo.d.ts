declare namespace jdk {
  namespace jshell {

    interface SourceCodeAnalysis$CompletionInfo {
      completeness(): jdk.jshell.SourceCodeAnalysis$Completeness
      remaining(): java.lang.String
      source(): java.lang.String
    }

  }
}
