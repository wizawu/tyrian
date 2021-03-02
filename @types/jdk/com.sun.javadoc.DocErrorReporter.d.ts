declare namespace com {
  namespace sun {
    namespace javadoc {

      interface DocErrorReporter {
        printError(arg0: java.lang.String): void
        printError(arg0: com.sun.javadoc.SourcePosition, arg1: java.lang.String): void
        printWarning(arg0: java.lang.String): void
        printWarning(arg0: com.sun.javadoc.SourcePosition, arg1: java.lang.String): void
        printNotice(arg0: java.lang.String): void
        printNotice(arg0: com.sun.javadoc.SourcePosition, arg1: java.lang.String): void
      }

    }
  }
}
