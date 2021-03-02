declare namespace javax {
  namespace tools {

    class DiagnosticCollector<S> implements javax.tools.DiagnosticListener<S> {
      public constructor()
      public report(arg0: javax.tools.Diagnostic<S>): void
      public getDiagnostics(): java.util.List<javax.tools.Diagnostic<S>>
    }

  }
}
