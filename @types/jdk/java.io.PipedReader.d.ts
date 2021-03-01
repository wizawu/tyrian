declare namespace java {
  namespace io {

    class PipedReader extends java.io.Reader {

      closedByWriter: boolean
      closedByReader: boolean
      connected: boolean
      readSide: java.lang.Thread
      writeSide: java.lang.Thread
      buffer: char[]
      in: int
      out: int
      public constructor(arg0: java.io.PipedWriter)
      public constructor(arg0: java.io.PipedWriter, arg1: int)
      public constructor()
      public constructor(arg0: int)
      public connect(arg0: java.io.PipedWriter): void
      receive(arg0: int): void
      receive(arg0: char[], arg1: int, arg2: int): void
      receivedLast(): void
      public read(): int
      public read(arg0: char[], arg1: int, arg2: int): int
      public ready(): boolean
      public close(): void
    }

  }
}
