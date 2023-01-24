declare namespace javax {
  namespace swing {
    class ProgressMonitorInputStream extends java.io.FilterInputStream {
      public constructor(arg0: java.awt.Component, arg1: java.lang.Object | any, arg2: java.io.InputStream)
      public getProgressMonitor(): javax.swing.ProgressMonitor
      public read(): number
      public read(arg0: number[] | java.lang.Byte[]): number
      public read(
        arg0: number[] | java.lang.Byte[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): number
      public skip(arg0: number | java.lang.Long): number
      public close(): void
      public reset(): void
    }
  }
}
