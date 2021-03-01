declare namespace javax {
  namespace tools {

    interface DiagnosticListener<S> {

      report(arg0: javax.tools.Diagnostic<S>): void
    }

  }
}
