declare namespace java {
  namespace io {

    class CharArrayWriter extends java.io.Writer {
      protected buf: char[]
      protected count: int
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public write(arg0: number | java.lang.Integer): void
      public write(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public write(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      public writeTo(arg0: java.io.Writer): void
      public append(arg0: string | java.lang.CharSequence): java.io.CharArrayWriter
      public append(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.io.CharArrayWriter
      public append(arg0: string | java.lang.Character): java.io.CharArrayWriter
      public reset(): void
      public toCharArray(): string[]
      public size(): number
      public toString(): java.lang.String
      public flush(): void
      public close(): void
      public append(arg0: string | java.lang.Character): java.io.Writer
      public append(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.io.Writer
      public append(arg0: string | java.lang.CharSequence): java.io.Writer
      public append(arg0: string | java.lang.Character): java.lang.Appendable
      public append(arg0: string | java.lang.CharSequence, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.Appendable
      public append(arg0: string | java.lang.CharSequence): java.lang.Appendable
    }

  }
}
