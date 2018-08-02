declare namespace javax {
    namespace sql {
        interface CommonDataSource {
            getLogWriter(): java.io.PrintWriter
            setLogWriter(arg0: java.io.PrintWriter): void
            setLoginTimeout(arg0: int): void
            getLoginTimeout(): int
            getParentLogger(): java.util.logging.Logger
        }
    }
}