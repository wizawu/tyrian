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
      public constructor(arg0: java.io.PipedOutputStream, arg1: int)
      public constructor()
      public constructor(arg0: int)
      public connect(arg0: java.io.PipedOutputStream): void
      protected receive(arg0: int): void
      receive(arg0: byte[], arg1: int, arg2: int): void
      receivedLast(): void
      public read(): int
      public read(arg0: byte[], arg1: int, arg2: int): int
      public available(): int
      public close(): void
    }

  }
}
