declare namespace java {
    namespace sql {
        interface Connection extends java.sql.Wrapper , java.lang.AutoCloseable {
            TRANSACTION_NONE: int
            TRANSACTION_READ_UNCOMMITTED: int
            TRANSACTION_READ_COMMITTED: int
            TRANSACTION_REPEATABLE_READ: int
            TRANSACTION_SERIALIZABLE: int
            createStatement(): java.sql.Statement
            prepareStatement(arg0: java.lang.String | string): java.sql.PreparedStatement
            prepareCall(arg0: java.lang.String | string): java.sql.CallableStatement
            nativeSQL(arg0: java.lang.String | string): string
            setAutoCommit(arg0: boolean): void
            getAutoCommit(): boolean
            commit(): void
            rollback(): void
            close(): void
            isClosed(): boolean
            getMetaData(): java.sql.DatabaseMetaData
            setReadOnly(arg0: boolean): void
            isReadOnly(): boolean
            setCatalog(arg0: java.lang.String | string): void
            getCatalog(): string
            setTransactionIsolation(arg0: int): void
            getTransactionIsolation(): int
            getWarnings(): java.sql.SQLWarning
            clearWarnings(): void
            createStatement(arg0: int, arg1: int): java.sql.Statement
            prepareStatement(arg0: java.lang.String | string, arg1: int, arg2: int): java.sql.PreparedStatement
            prepareCall(arg0: java.lang.String | string, arg1: int, arg2: int): java.sql.CallableStatement
            getTypeMap(): java.util.Map<java.lang.String, java.lang.Class<any>>
            setTypeMap(arg0: java.util.Map<java.lang.String, java.lang.Class<any>>): void
            setHoldability(arg0: int): void
            getHoldability(): int
            setSavepoint(): java.sql.Savepoint
            setSavepoint(arg0: java.lang.String | string): java.sql.Savepoint
            rollback(arg0: java.sql.Savepoint): void
            releaseSavepoint(arg0: java.sql.Savepoint): void
            createStatement(arg0: int, arg1: int, arg2: int): java.sql.Statement
            prepareStatement(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): java.sql.PreparedStatement
            prepareCall(arg0: java.lang.String | string, arg1: int, arg2: int, arg3: int): java.sql.CallableStatement
            prepareStatement(arg0: java.lang.String | string, arg1: int): java.sql.PreparedStatement
            prepareStatement(arg0: java.lang.String | string, arg1: int[]): java.sql.PreparedStatement
            prepareStatement(arg0: java.lang.String | string, arg1: java.lang.String[]): java.sql.PreparedStatement
            createClob(): java.sql.Clob
            createBlob(): java.sql.Blob
            createNClob(): java.sql.NClob
            createSQLXML(): java.sql.SQLXML
            isValid(arg0: int): boolean
            setClientInfo(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            setClientInfo(arg0: java.util.Properties): void
            getClientInfo(arg0: java.lang.String | string): string
            getClientInfo(): java.util.Properties
            createArrayOf(arg0: java.lang.String | string, arg1: java.lang.Object[]): java.sql.Array
            createStruct(arg0: java.lang.String | string, arg1: java.lang.Object[]): java.sql.Struct
            setSchema(arg0: java.lang.String | string): void
            getSchema(): string
            abort(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda): void
            setNetworkTimeout(arg0: java.util.concurrent.Executor | java.util.concurrent.Executor$$Lambda, arg1: int): void
            getNetworkTimeout(): int
        }
    }
}