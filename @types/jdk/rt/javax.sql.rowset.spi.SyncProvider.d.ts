declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
                abstract class SyncProvider {
                    public static readonly GRADE_NONE: int
                    public static readonly GRADE_CHECK_MODIFIED_AT_COMMIT: int
                    public static readonly GRADE_CHECK_ALL_AT_COMMIT: int
                    public static readonly GRADE_LOCK_WHEN_MODIFIED: int
                    public static readonly GRADE_LOCK_WHEN_LOADED: int
                    public static readonly DATASOURCE_NO_LOCK: int
                    public static readonly DATASOURCE_ROW_LOCK: int
                    public static readonly DATASOURCE_TABLE_LOCK: int
                    public static readonly DATASOURCE_DB_LOCK: int
                    public static readonly UPDATABLE_VIEW_SYNC: int
                    public static readonly NONUPDATABLE_VIEW_SYNC: int
                    public constructor()
                    public abstract getProviderID(): string
                    public abstract getRowSetReader(): javax.sql.RowSetReader
                    public abstract getRowSetWriter(): javax.sql.RowSetWriter
                    public abstract getProviderGrade(): int
                    public abstract setDataSourceLock(arg0: int): void
                    public abstract getDataSourceLock(): int
                    public abstract supportsUpdatableView(): int
                    public abstract getVersion(): string
                    public abstract getVendor(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}