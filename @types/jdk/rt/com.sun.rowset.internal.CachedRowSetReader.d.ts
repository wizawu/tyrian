declare namespace com {
    namespace sun {
        namespace rowset {
            namespace internal {
                class CachedRowSetReader implements javax.sql.RowSetReader , java.io.Serializable {
                    public constructor()
                    public readData(arg0: javax.sql.RowSetInternal): void
                    public reset(): boolean
                    public connect(arg0: javax.sql.RowSetInternal): java.sql.Connection
                    protected getCloseConnection(): boolean
                    public setStartPosition(arg0: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}