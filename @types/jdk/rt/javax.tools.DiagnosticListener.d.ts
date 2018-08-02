declare namespace javax {
    namespace tools {
        interface DiagnosticListener<S> {
            report(arg0: javax.tools.Diagnostic<S>): void
        }
        interface DiagnosticListener$$Lambda<S> {
            (arg0: javax.tools.Diagnostic<S>): void
        }
    }
}