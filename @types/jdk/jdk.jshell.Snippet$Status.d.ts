declare namespace jdk {
  namespace jshell {

    class Snippet$Status extends java.lang.Enum<jdk.jshell.Snippet$Status> {

      public static readonly VALID: jdk.jshell.Snippet$Status
      public static readonly RECOVERABLE_DEFINED: jdk.jshell.Snippet$Status
      public static readonly RECOVERABLE_NOT_DEFINED: jdk.jshell.Snippet$Status
      public static readonly DROPPED: jdk.jshell.Snippet$Status
      public static readonly OVERWRITTEN: jdk.jshell.Snippet$Status
      public static readonly REJECTED: jdk.jshell.Snippet$Status
      public static readonly NONEXISTENT: jdk.jshell.Snippet$Status
      public static values(): jdk.jshell.Snippet$Status[]
      public static valueOf(arg0: java.lang.String): jdk.jshell.Snippet$Status
      public isActive(): boolean
      public isDefined(): boolean
    }

  }
}
