declare namespace java {
    namespace sql {
interface Clob {
    length(): long
    getSubString(arg0: long, arg1: int): string
    getCharacterStream(): java.io.Reader
    getAsciiStream(): java.io.InputStream
    position(arg0: java.lang.String | string, arg1: long): long
    position(arg0: java.sql.Clob, arg1: long): long
    setString(arg0: long, arg1: java.lang.String | string): int
    setString(arg0: long, arg1: java.lang.String | string, arg2: int, arg3: int): int
    setAsciiStream(arg0: long): java.io.OutputStream
    setCharacterStream(arg0: long): java.io.Writer
    truncate(arg0: long): void
    free(): void
    getCharacterStream(arg0: long, arg1: long): java.io.Reader
}

    }
}