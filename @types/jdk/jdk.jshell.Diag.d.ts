declare namespace jdk {
  namespace jshell {

    abstract class Diag {

      public static readonly NOPOS: long
      constructor()
      public abstract isError(): boolean
      public abstract getPosition(): long
      public abstract getStartPosition(): long
      public abstract getEndPosition(): long
      public abstract getCode(): java.lang.String
      public abstract getMessage(arg0: java.util.Locale): java.lang.String
      snippetOrNull(): jdk.jshell.Snippet
      isUnreachableError(): boolean
      isNotAStatementError(): boolean
      isResolutionError(): boolean
    }

  }
}
