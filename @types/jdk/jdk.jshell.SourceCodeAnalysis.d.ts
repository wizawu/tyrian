declare namespace jdk {
  namespace jshell {

    abstract class SourceCodeAnalysis {

      public abstract analyzeCompletion(arg0: java.lang.String): jdk.jshell.SourceCodeAnalysis$CompletionInfo
      public abstract completionSuggestions(arg0: java.lang.String, arg1: int, arg2: int[]): java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>
      public abstract documentation(arg0: java.lang.String, arg1: int, arg2: boolean): java.util.List<jdk.jshell.SourceCodeAnalysis$Documentation>
      public abstract analyzeType(arg0: java.lang.String, arg1: int): java.lang.String
      public abstract listQualifiedNames(arg0: java.lang.String, arg1: int): jdk.jshell.SourceCodeAnalysis$QualifiedNames
      public abstract wrapper(arg0: jdk.jshell.Snippet): jdk.jshell.SourceCodeAnalysis$SnippetWrapper
      public abstract wrappers(arg0: java.lang.String): java.util.List<jdk.jshell.SourceCodeAnalysis$SnippetWrapper>
      public abstract sourceToSnippets(arg0: java.lang.String): java.util.List<jdk.jshell.Snippet>
      public abstract dependents(arg0: jdk.jshell.Snippet): java.util.Collection<jdk.jshell.Snippet>
      constructor()
    }

  }
}
