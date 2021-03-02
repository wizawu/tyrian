declare namespace java {
  namespace io {

    class StreamTokenizer {
      public ttype: int
      public static readonly TT_EOF: int
      public static readonly TT_EOL: int
      public static readonly TT_NUMBER: int
      public static readonly TT_WORD: int
      public sval: java.lang.String
      public nval: double
      public constructor(arg0: java.io.InputStream)
      public constructor(arg0: java.io.Reader)
      public resetSyntax(): void
      public wordChars(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public whitespaceChars(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public ordinaryChars(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      public ordinaryChar(arg0: number | java.lang.Integer): void
      public commentChar(arg0: number | java.lang.Integer): void
      public quoteChar(arg0: number | java.lang.Integer): void
      public parseNumbers(): void
      public eolIsSignificant(arg0: boolean | java.lang.Boolean): void
      public slashStarComments(arg0: boolean | java.lang.Boolean): void
      public slashSlashComments(arg0: boolean | java.lang.Boolean): void
      public lowerCaseMode(arg0: boolean | java.lang.Boolean): void
      public nextToken(): number
      public pushBack(): void
      public lineno(): number
      public toString(): java.lang.String
    }

  }
}
