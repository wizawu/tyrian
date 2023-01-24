declare namespace javax {
  namespace sql {
    namespace rowset {
      interface JdbcRowSet extends javax.sql.RowSet, javax.sql.rowset.Joinable {
        getShowDeleted(): boolean
        setShowDeleted(arg0: boolean | java.lang.Boolean): void
        getRowSetWarnings(): javax.sql.rowset.RowSetWarning
        commit(): void
        getAutoCommit(): boolean
        setAutoCommit(arg0: boolean | java.lang.Boolean): void
        rollback(): void
        rollback(arg0: java.sql.Savepoint): void
      }
    }
  }
}
