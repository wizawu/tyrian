declare namespace jdk {
  namespace jshell {

    abstract class SourceCodeAnalysis {
      public abstract analyzeCompletion(arg0: java.lang.String | string): jdk.jshell.SourceCodeAnalysis$CompletionInfo
      public abstract completionSuggestions(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number[] | java.lang.Integer[]): java.util.List<jdk.jshell.SourceCodeAnalysis$Suggestion>
      public abstract documentation(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: boolean | java.lang.Boolean): java.util.List<jdk.jshell.SourceCodeAnalysis$Documentation>
      public abstract analyzeType(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.lang.String
      public abstract listQualifiedNames(arg0: java.lang.String | string, arg1: number | java.lang.Integer): jdk.jshell.SourceCodeAnalysis$QualifiedNames
      public abstract wrapper(arg0: jdk.jshell.Snippet): jdk.jshell.SourceCodeAnalysis$SnippetWrapper
      public abstract wrappers(arg0: java.lang.String | string): java.util.List<jdk.jshell.SourceCodeAnalysis$SnippetWrapper>
      public abstract sourceToSnippets(arg0: java.lang.String | string): java.util.List<jdk.jshell.Snippet>
      public abstract dependents(arg0: jdk.jshell.Snippet): java.util.Collection<jdk.jshell.Snippet>
      constructor()
    }

  }
}
