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
      public constructor(arg0: java.io.PipedWriter, arg1: number | java.lang.Integer)
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public connect(arg0: java.io.PipedWriter): void
      receive(arg0: number | java.lang.Integer): void
      receive(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      receivedLast(): void
      public read(): number
      public read(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): number
      public ready(): boolean
      public close(): void
    }

  }
}
