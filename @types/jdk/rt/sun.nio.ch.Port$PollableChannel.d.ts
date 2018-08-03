declare namespace sun {
    namespace nio {
        namespace ch {
            interface Port$PollableChannel extends java.io.Closeable {
                onEvent(arg0: int, arg1: boolean): void
            }
            interface Port$PollableChannel$$Lambda extends java.io.Closeable {
                (arg0: int, arg1: boolean): void
            }
        }
    }
}