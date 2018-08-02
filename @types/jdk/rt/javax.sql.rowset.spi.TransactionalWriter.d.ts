declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
interface TransactionalWriter extends javax.sql.RowSetWriter {
    commit(): void
    rollback(): void
    rollback(arg0: java.sql.Savepoint): void
}

            }
        }
    }
}