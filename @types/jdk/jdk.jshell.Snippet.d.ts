declare namespace jdk {
  namespace jshell {

    abstract class Snippet {

      static readonly UNASSOCIATED_ID: java.lang.String
      readonly unitName: java.lang.String
      constructor(arg0: jdk.jshell.Key, arg1: java.lang.String, arg2: jdk.jshell.Wrap, arg3: java.lang.String, arg4: jdk.jshell.Snippet$SubKind, arg5: jdk.jshell.DiagList)
      public id(): java.lang.String
      public kind(): jdk.jshell.Snippet$Kind
      public subKind(): jdk.jshell.Snippet$SubKind
      public source(): java.lang.String
      public toString(): java.lang.String
      name(): java.lang.String
      key(): jdk.jshell.Key
      unresolved(): java.util.List<java.lang.String>
      diagnostics(): jdk.jshell.DiagList
      syntheticDiags(): jdk.jshell.DiagList
      corralled(): jdk.jshell.Wrap
      declareReferences(): java.util.Collection<java.lang.String>
      bodyReferences(): java.util.Collection<java.lang.String>
      importLine(arg0: jdk.jshell.JShell): java.lang.String
      setId(arg0: java.lang.String): void
      readonly setSequenceNumber(arg0: int): void
      setOuterWrap(arg0: jdk.jshell.OuterWrap): void
      setCompilationStatus(arg0: jdk.jshell.Snippet$Status, arg1: java.util.List<java.lang.String>, arg2: jdk.jshell.DiagList): void
      setDiagnostics(arg0: jdk.jshell.DiagList): void
      setFailed(arg0: jdk.jshell.DiagList): void
      setDropped(): void
      setOverwritten(): void
      status(): jdk.jshell.Snippet$Status
      className(): java.lang.String
      classFullName(): java.lang.String
      outerWrap(): jdk.jshell.OuterWrap
      sequenceNumber(): int
      guts(): jdk.jshell.Wrap
      isExecutable(): boolean
    }

  }
}
