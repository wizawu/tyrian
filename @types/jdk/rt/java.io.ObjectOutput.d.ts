declare namespace java {
    namespace io {
interface ObjectOutput extends java.io.DataOutput , java.lang.AutoCloseable {
    writeObject(arg0: java.lang.Object): void
    write(arg0: int): void
    write(arg0: byte[]): void
    write(arg0: byte[], arg1: int, arg2: int): void
    flush(): void
    close(): void
}

    }
}