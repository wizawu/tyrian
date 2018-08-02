declare namespace java {
    namespace sql {
        interface Statement extends java.sql.Wrapper , java.lang.AutoCloseable {
            CLOSE_CURRENT_RESULT: int
            KEEP_CURRENT_RESULT: int
            CLOSE_ALL_RESULTS: int
            SUCCESS_NO_INFO: int
            EXECUTE_FAILED: int
            RETURN_GENERATED_KEYS: int
            NO_GENERATED_KEYS: int
            executeQuery(arg0: java.lang.String | string): java.sql.ResultSet
            executeUpdate(arg0: java.lang.String | string): int
            close(): void
            getMaxFieldSize(): int
            setMaxFieldSize(arg0: int): void
            getMaxRows(): int
            setMaxRows(arg0: int): void
            setEscapeProcessing(arg0: boolean): void
            getQueryTimeout(): int
            setQueryTimeout(arg0: int): void
            cancel(): void
            getWarnings(): java.sql.SQLWarning
            clearWarnings(): void
            setCursorName(arg0: java.lang.String | string): void
            execute(arg0: java.lang.String | string): boolean
            getResultSet(): java.sql.ResultSet
            getUpdateCount(): int
            getMoreResults(): boolean
            setFetchDirection(arg0: int): void
            getFetchDirection(): int
            setFetchSize(arg0: int): void
            getFetchSize(): int
            getResultSetConcurrency(): int
            getResultSetType(): int
            addBatch(arg0: java.lang.String | string): void
            clearBatch(): void
            executeBatch(): int[]
            getConnection(): java.sql.Connection
            getMoreResults(arg0: int): boolean
            getGeneratedKeys(): java.sql.ResultSet
            executeUpdate(arg0: java.lang.String | string, arg1: int): int
            executeUpdate(arg0: java.lang.String | string, arg1: int[]): int
            executeUpdate(arg0: java.lang.String | string, arg1: java.lang.String[]): int
            execute(arg0: java.lang.String | string, arg1: int): boolean
            execute(arg0: java.lang.String | string, arg1: int[]): boolean
            execute(arg0: java.lang.String | string, arg1: java.lang.String[]): boolean
            getResultSetHoldability(): int
            isClosed(): boolean
            setPoolable(arg0: boolean): void
            isPoolable(): boolean
            closeOnCompletion(): void
            isCloseOnCompletion(): boolean
            getLargeUpdateCount(): long
            setLargeMaxRows(arg0: long): void
            getLargeMaxRows(): long
            executeLargeBatch(): long[]
            executeLargeUpdate(arg0: java.lang.String | string): long
            executeLargeUpdate(arg0: java.lang.String | string, arg1: int): long
            executeLargeUpdate(arg0: java.lang.String | string, arg1: int[]): long
            executeLargeUpdate(arg0: java.lang.String | string, arg1: java.lang.String[]): long
        }
    }
}