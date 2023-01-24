declare namespace java {
  namespace util {
    class Scanner implements java.util.Iterator<java.lang.String>, java.io.Closeable {
      modCount: int
      static readonly $assertionsDisabled: boolean
      public constructor(arg0: java.lang.Readable | java.lang.Readable$$lambda)
      public constructor(arg0: java.io.InputStream)
      public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string)
      public constructor(arg0: java.io.InputStream, arg1: java.nio.charset.Charset)
      public constructor(arg0: java.io.File)
      public constructor(arg0: java.io.File, arg1: java.lang.String | string)
      public constructor(arg0: java.io.File, arg1: java.nio.charset.Charset)
      public constructor(arg0: java.nio.file.Path)
      public constructor(arg0: java.nio.file.Path, arg1: java.lang.String | string)
      public constructor(arg0: java.nio.file.Path, arg1: java.nio.charset.Charset)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.nio.channels.ReadableByteChannel)
      public constructor(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string)
      public constructor(arg0: java.nio.channels.ReadableByteChannel, arg1: java.nio.charset.Charset)
      public close(): void
      public ioException(): java.io.IOException
      public delimiter(): java.util.regex.Pattern
      public useDelimiter(arg0: java.util.regex.Pattern): java.util.Scanner
      public useDelimiter(arg0: java.lang.String | string): java.util.Scanner
      public locale(): java.util.Locale
      public useLocale(arg0: java.util.Locale): java.util.Scanner
      public radix(): number
      public useRadix(arg0: number | java.lang.Integer): java.util.Scanner
      public match(): java.util.regex.MatchResult
      public toString(): java.lang.String
      public hasNext(): boolean
      public next(): java.lang.String
      public remove(): void
      public hasNext(arg0: java.lang.String | string): boolean
      public next(arg0: java.lang.String | string): java.lang.String
      public hasNext(arg0: java.util.regex.Pattern): boolean
      public next(arg0: java.util.regex.Pattern): java.lang.String
      public hasNextLine(): boolean
      public nextLine(): java.lang.String
      public findInLine(arg0: java.lang.String | string): java.lang.String
      public findInLine(arg0: java.util.regex.Pattern): java.lang.String
      public findWithinHorizon(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.lang.String
      public findWithinHorizon(arg0: java.util.regex.Pattern, arg1: number | java.lang.Integer): java.lang.String
      public skip(arg0: java.util.regex.Pattern): java.util.Scanner
      public skip(arg0: java.lang.String | string): java.util.Scanner
      public hasNextBoolean(): boolean
      public nextBoolean(): boolean
      public hasNextByte(): boolean
      public hasNextByte(arg0: number | java.lang.Integer): boolean
      public nextByte(): number
      public nextByte(arg0: number | java.lang.Integer): number
      public hasNextShort(): boolean
      public hasNextShort(arg0: number | java.lang.Integer): boolean
      public nextShort(): number
      public nextShort(arg0: number | java.lang.Integer): number
      public hasNextInt(): boolean
      public hasNextInt(arg0: number | java.lang.Integer): boolean
      public nextInt(): number
      public nextInt(arg0: number | java.lang.Integer): number
      public hasNextLong(): boolean
      public hasNextLong(arg0: number | java.lang.Integer): boolean
      public nextLong(): number
      public nextLong(arg0: number | java.lang.Integer): number
      public hasNextFloat(): boolean
      public nextFloat(): number
      public hasNextDouble(): boolean
      public nextDouble(): number
      public hasNextBigInteger(): boolean
      public hasNextBigInteger(arg0: number | java.lang.Integer): boolean
      public nextBigInteger(): java.math.BigInteger
      public nextBigInteger(arg0: number | java.lang.Integer): java.math.BigInteger
      public hasNextBigDecimal(): boolean
      public nextBigDecimal(): java.math.BigDecimal
      public reset(): java.util.Scanner
      public tokens(): java.util.stream.Stream<java.lang.String>
      public findAll(arg0: java.util.regex.Pattern): java.util.stream.Stream<java.util.regex.MatchResult>
      public findAll(arg0: java.lang.String | string): java.util.stream.Stream<java.util.regex.MatchResult>
      public next(): java.lang.Object
    }
  }
}
