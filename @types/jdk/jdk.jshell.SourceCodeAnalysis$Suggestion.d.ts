declare namespace jdk {
  namespace jshell {
    interface SourceCodeAnalysis$Suggestion {
      continuation(): java.lang.String
      matchesType(): boolean
    }
  }
}
