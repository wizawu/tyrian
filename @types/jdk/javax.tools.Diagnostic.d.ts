declare namespace javax {
  namespace tools {
    interface Diagnostic<S> {
      readonly NOPOS: long
      getKind(): javax.tools.Diagnostic$Kind
      getSource(): S
      getPosition(): number
      getStartPosition(): number
      getEndPosition(): number
      getLineNumber(): number
      getColumnNumber(): number
      getCode(): java.lang.String
      getMessage(arg0: java.util.Locale): java.lang.String
    }
  }
}
