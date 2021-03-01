declare namespace javax {
  namespace print {

    abstract class StreamPrintService implements javax.print.PrintService {

      protected constructor(arg0: java.io.OutputStream)
      public getOutputStream(): java.io.OutputStream
      public abstract getOutputFormat(): java.lang.String
      public dispose(): void
      public isDisposed(): boolean
    }

  }
}
