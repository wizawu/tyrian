declare namespace java {
  namespace io {

    class PipedInputStream extends java.io.InputStream {
      closedByWriter: boolean
      closedByReader: boolean
      connected: boolean
      readSide: java.lang.Thread
      writeSide: java.lang.Thread
      protected static readonly PIPE_SIZE: int
      protected buffer: byte[]
      protected in: int
      protected out: int
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: java.io.PipedOutputStream)
      public constructor(arg0: java.io.PipedOutputStream, arg1: number | java.lang.Integer)
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public connect(arg0: java.io.PipedOutputStream): void
      protected receive(arg0: number | java.lang.Integer): void
      receive(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      receivedLast(): void
      public read(): number
      public read(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public available(): number
      public close(): void
    }

  }
}
