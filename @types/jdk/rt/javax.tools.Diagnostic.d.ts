declare namespace javax {
    namespace tools {
        interface Diagnostic<S> {
            NOPOS: long
            getKind(): javax.tools.Diagnostic$Kind
            getSource(): S
            getPosition(): long
            getStartPosition(): long
            getEndPosition(): long
            getLineNumber(): long
            getColumnNumber(): long
            getCode(): string
            getMessage(arg0: java.util.Locale): string
        }
    }
}