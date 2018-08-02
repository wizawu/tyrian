declare namespace java {
    namespace sql {
        interface Blob {
            length(): long
            getBytes(arg0: long, arg1: int): byte[]
            getBinaryStream(): java.io.InputStream
            position(arg0: byte[], arg1: long): long
            position(arg0: java.sql.Blob, arg1: long): long
            setBytes(arg0: long, arg1: byte[]): int
            setBytes(arg0: long, arg1: byte[], arg2: int, arg3: int): int
            setBinaryStream(arg0: long): java.io.OutputStream
            truncate(arg0: long): void
            free(): void
            getBinaryStream(arg0: long, arg1: long): java.io.InputStream
        }
    }
}