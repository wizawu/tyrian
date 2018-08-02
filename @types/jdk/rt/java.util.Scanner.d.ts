declare namespace java {
    namespace util {
class Scanner implements java.util.Iterator<java.lang.String> , java.io.Closeable {
    public constructor(arg0: java.lang.Readable | java.lang.Readable$$Lambda)
    public constructor(arg0: java.io.InputStream)
    public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string)
    public constructor(arg0: java.io.File)
    public constructor(arg0: java.io.File, arg1: java.lang.String | string)
    public constructor(arg0: java.nio.file.Path)
    public constructor(arg0: java.nio.file.Path, arg1: java.lang.String | string)
    public constructor(arg0: java.lang.String | string)
    public constructor(arg0: java.nio.channels.ReadableByteChannel)
    public constructor(arg0: java.nio.channels.ReadableByteChannel, arg1: java.lang.String | string)
    public close(): void
    public ioException(): java.io.IOException
    public delimiter(): java.util.regex.Pattern
    public useDelimiter(arg0: java.util.regex.Pattern): java.util.Scanner
    public useDelimiter(arg0: java.lang.String | string): java.util.Scanner
    public locale(): java.util.Locale
    public useLocale(arg0: java.util.Locale): java.util.Scanner
    public radix(): int
    public useRadix(arg0: int): java.util.Scanner
    public match(): java.util.regex.MatchResult
    public toString(): string
    public hasNext(): boolean
    public next(): string
    public remove(): void
    public hasNext(arg0: java.lang.String | string): boolean
    public next(arg0: java.lang.String | string): string
    public hasNext(arg0: java.util.regex.Pattern): boolean
    public next(arg0: java.util.regex.Pattern): string
    public hasNextLine(): boolean
    public nextLine(): string
    public findInLine(arg0: java.lang.String | string): string
    public findInLine(arg0: java.util.regex.Pattern): string
    public findWithinHorizon(arg0: java.lang.String | string, arg1: int): string
    public findWithinHorizon(arg0: java.util.regex.Pattern, arg1: int): string
    public skip(arg0: java.util.regex.Pattern): java.util.Scanner
    public skip(arg0: java.lang.String | string): java.util.Scanner
    public hasNextBoolean(): boolean
    public nextBoolean(): boolean
    public hasNextByte(): boolean
    public hasNextByte(arg0: int): boolean
    public nextByte(): byte
    public nextByte(arg0: int): byte
    public hasNextShort(): boolean
    public hasNextShort(arg0: int): boolean
    public nextShort(): short
    public nextShort(arg0: int): short
    public hasNextInt(): boolean
    public hasNextInt(arg0: int): boolean
    public nextInt(): int
    public nextInt(arg0: int): int
    public hasNextLong(): boolean
    public hasNextLong(arg0: int): boolean
    public nextLong(): long
    public nextLong(arg0: int): long
    public hasNextFloat(): boolean
    public nextFloat(): float
    public hasNextDouble(): boolean
    public nextDouble(): double
    public hasNextBigInteger(): boolean
    public hasNextBigInteger(arg0: int): boolean
    public nextBigInteger(): java.math.BigInteger
    public nextBigInteger(arg0: int): java.math.BigInteger
    public hasNextBigDecimal(): boolean
    public nextBigDecimal(): java.math.BigDecimal
    public reset(): java.util.Scanner
    public next(): java.lang.Object
    public static class: java.lang.Class<any>
}

    }
}