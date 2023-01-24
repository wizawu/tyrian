declare namespace java {
  namespace awt {
    namespace print {
      class PrinterIOException extends java.awt.print.PrinterException {
        static readonly serialVersionUID: long
        public constructor(arg0: java.io.IOException)
        public getIOException(): java.io.IOException
        public getCause(): java.lang.Throwable
      }
    }
  }
}
