declare namespace javax {
  namespace sql {
    namespace rowset {

      interface CachedRowSet extends javax.sql.RowSet, javax.sql.rowset.Joinable {
        public static readonly COMMIT_ON_ACCEPT_CHANGES: boolean
        populate(arg0: java.sql.ResultSet): void
        execute(arg0: java.sql.Connection): void
        acceptChanges(): void
        acceptChanges(arg0: java.sql.Connection): void
        restoreOriginal(): void
        release(): void
        undoDelete(): void
        undoInsert(): void
        undoUpdate(): void
        columnUpdated(arg0: number | java.lang.Integer): boolean
        columnUpdated(arg0: java.lang.String | string): boolean
        toCollection(): java.util.Collection<unknown>
        toCollection(arg0: number | java.lang.Integer): java.util.Collection<unknown>
        toCollection(arg0: java.lang.String | string): java.util.Collection<unknown>
        getSyncProvider(): javax.sql.rowset.spi.SyncProvider
        setSyncProvider(arg0: java.lang.String | string): void
        size(): number
        setMetaData(arg0: javax.sql.RowSetMetaData): void
        getOriginal(): java.sql.ResultSet
        getOriginalRow(): java.sql.ResultSet
        setOriginalRow(): void
        getTableName(): java.lang.String
        setTableName(arg0: java.lang.String | string): void
        getKeyColumns(): number[]
        setKeyColumns(arg0: number[] | java.lang.Integer[]): void
        createShared(): javax.sql.RowSet
        createCopy(): javax.sql.rowset.CachedRowSet
        createCopySchema(): javax.sql.rowset.CachedRowSet
        createCopyNoConstraints(): javax.sql.rowset.CachedRowSet
        getRowSetWarnings(): javax.sql.rowset.RowSetWarning
        getShowDeleted(): boolean
        setShowDeleted(arg0: boolean | java.lang.Boolean): void
        commit(): void
        rollback(): void
        rollback(arg0: java.sql.Savepoint): void
        rowSetPopulated(arg0: javax.sql.RowSetEvent, arg1: number | java.lang.Integer): void
        populate(arg0: java.sql.ResultSet, arg1: number | java.lang.Integer): void
        setPageSize(arg0: number | java.lang.Integer): void
        getPageSize(): number
        nextPage(): boolean
        previousPage(): boolean
      }

    }
  }
}
