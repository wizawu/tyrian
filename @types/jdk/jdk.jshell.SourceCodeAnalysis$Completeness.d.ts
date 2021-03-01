declare namespace jdk {
  namespace jshell {

    class SourceCodeAnalysis$Completeness extends java.lang.Enum<jdk.jshell.SourceCodeAnalysis$Completeness> {

      public static readonly COMPLETE: jdk.jshell.SourceCodeAnalysis$Completeness
      public static readonly COMPLETE_WITH_SEMI: jdk.jshell.SourceCodeAnalysis$Completeness
      public static readonly DEFINITELY_INCOMPLETE: jdk.jshell.SourceCodeAnalysis$Completeness
      public static readonly CONSIDERED_INCOMPLETE: jdk.jshell.SourceCodeAnalysis$Completeness
      public static readonly EMPTY: jdk.jshell.SourceCodeAnalysis$Completeness
      public static readonly UNKNOWN: jdk.jshell.SourceCodeAnalysis$Completeness
      public static values(): jdk.jshell.SourceCodeAnalysis$Completeness[]
      public static valueOf(arg0: java.lang.String): jdk.jshell.SourceCodeAnalysis$Completeness
      public isComplete(): boolean
    }

  }
}
