declare namespace jdk {
  namespace jshell {

    abstract class Diag {
      public static readonly NOPOS: long
      constructor()
      public abstract isError(): boolean
      public abstract getPosition(): number
      public abstract getStartPosition(): number
      public abstract getEndPosition(): number
      public abstract getCode(): java.lang.String
      public abstract getMessage(arg0: java.util.Locale): java.lang.String
      snippetOrNull(): jdk.jshell.Snippet
      isUnreachableError(): boolean
      isNotAStatementError(): boolean
      isResolutionError(): boolean
    }

  }
}
