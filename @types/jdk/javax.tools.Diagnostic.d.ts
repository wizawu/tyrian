declare namespace javax {
  namespace tools {

    interface Diagnostic<S> {
      public static readonly NOPOS: long
      getKind(): javax.tools.Diagnostic$Kind
      getSource(): S
      getPosition(): long
      getStartPosition(): long
      getEndPosition(): long
      getLineNumber(): long
      getColumnNumber(): long
      getCode(): java.lang.String
      getMessage(arg0: java.util.Locale): java.lang.String
    }

  }
}
