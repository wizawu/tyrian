declare namespace sun {
    namespace rmi {
        namespace log {
            class LogOutputStream extends java.io.OutputStream {
                public constructor(arg0: java.io.RandomAccessFile)
                public write(arg0: int): void
                public write(arg0: byte[]): void
                public write(arg0: byte[], arg1: int, arg2: int): void
                public close(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}