declare namespace javax {
    namespace swing {
        class ProgressMonitorInputStream extends java.io.FilterInputStream {
            public constructor(arg0: java.awt.Component, arg1: java.lang.Object, arg2: java.io.InputStream | java.io.InputStream$$Lambda)
            public getProgressMonitor(): javax.swing.ProgressMonitor
            public read(): int
            public read(arg0: byte[]): int
            public read(arg0: byte[], arg1: int, arg2: int): int
            public skip(arg0: long): long
            public close(): void
            public reset(): void
            public static class: java.lang.Class<any>
        }
    }
}