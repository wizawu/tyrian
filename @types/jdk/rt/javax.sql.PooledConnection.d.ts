declare namespace javax {
    namespace sql {
interface PooledConnection {
    getConnection(): java.sql.Connection
    close(): void
    addConnectionEventListener(arg0: javax.sql.ConnectionEventListener): void
    removeConnectionEventListener(arg0: javax.sql.ConnectionEventListener): void
    addStatementEventListener(arg0: javax.sql.StatementEventListener): void
    removeStatementEventListener(arg0: javax.sql.StatementEventListener): void
}

    }
}