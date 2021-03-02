declare namespace javax {
  namespace xml {
    namespace transform {

      class TransformerException extends java.lang.Exception {
        locator: javax.xml.transform.SourceLocator
        containedException: java.lang.Throwable
        public getLocator(): javax.xml.transform.SourceLocator
        public setLocator(arg0: javax.xml.transform.SourceLocator): void
        public getException(): java.lang.Throwable
        public getCause(): java.lang.Throwable
        public initCause(arg0: java.lang.Throwable): java.lang.Throwable
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.Throwable)
        public constructor(arg0: java.lang.String, arg1: java.lang.Throwable)
        public constructor(arg0: java.lang.String, arg1: javax.xml.transform.SourceLocator)
        public constructor(arg0: java.lang.String, arg1: javax.xml.transform.SourceLocator, arg2: java.lang.Throwable)
        public getMessageAndLocation(): java.lang.String
        public getLocationAsString(): java.lang.String
        public printStackTrace(): void
        public printStackTrace(arg0: java.io.PrintStream): void
        public printStackTrace(arg0: java.io.PrintWriter): void
      }

    }
  }
}
