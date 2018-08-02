declare namespace sun {
    namespace net {
        namespace www {
            namespace http {
                class ChunkedOutputStream extends java.io.PrintStream {
                    public constructor(arg0: java.io.PrintStream)
                    public constructor(arg0: java.io.PrintStream, arg1: int)
                    public checkError(): boolean
                    public write(arg0: byte[], arg1: int, arg2: int): void
                    public write(arg0: int): void
                    public reset(): void
                    public size(): int
                    public close(): void
                    public flush(): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}