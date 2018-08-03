declare namespace javax {
    namespace print {
        abstract class StreamPrintService implements javax.print.PrintService {
            protected constructor(arg0: java.io.OutputStream)
            public getOutputStream(): java.io.OutputStream
            public getOutputFormat(): string
            public dispose(): void
            public isDisposed(): boolean
            public static class: java.lang.Class<any>
        }
    }
}