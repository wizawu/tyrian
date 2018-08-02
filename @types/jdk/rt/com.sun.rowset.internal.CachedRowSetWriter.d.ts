declare namespace com {
    namespace sun {
        namespace rowset {
            namespace internal {
                class CachedRowSetWriter implements javax.sql.rowset.spi.TransactionalWriter , java.io.Serializable {
                    public constructor()
                    public writeData(arg0: javax.sql.RowSetInternal): boolean
                    public setReader(arg0: com.sun.rowset.internal.CachedRowSetReader): void
                    public getReader(): com.sun.rowset.internal.CachedRowSetReader
                    public commit(): void
                    public commit(arg0: com.sun.rowset.CachedRowSetImpl, arg1: boolean): void
                    public rollback(): void
                    public rollback(arg0: java.sql.Savepoint): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}