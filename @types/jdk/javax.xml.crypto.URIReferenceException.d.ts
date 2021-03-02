declare namespace javax {
  namespace xml {
    namespace crypto {

      class URIReferenceException extends java.lang.Exception {
        public constructor()
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.Throwable)
        public constructor(arg0: java.lang.String, arg1: java.lang.Throwable, arg2: javax.xml.crypto.URIReference)
        public constructor(arg0: java.lang.Throwable)
        public getURIReference(): javax.xml.crypto.URIReference
        public getCause(): java.lang.Throwable
        public printStackTrace(): void
        public printStackTrace(arg0: java.io.PrintStream): void
        public printStackTrace(arg0: java.io.PrintWriter): void
      }

    }
  }
}
