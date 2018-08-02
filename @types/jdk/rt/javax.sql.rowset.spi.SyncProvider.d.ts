declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
abstract class SyncProvider {
    public static GRADE_NONE: int
    public static GRADE_CHECK_MODIFIED_AT_COMMIT: int
    public static GRADE_CHECK_ALL_AT_COMMIT: int
    public static GRADE_LOCK_WHEN_MODIFIED: int
    public static GRADE_LOCK_WHEN_LOADED: int
    public static DATASOURCE_NO_LOCK: int
    public static DATASOURCE_ROW_LOCK: int
    public static DATASOURCE_TABLE_LOCK: int
    public static DATASOURCE_DB_LOCK: int
    public static UPDATABLE_VIEW_SYNC: int
    public static NONUPDATABLE_VIEW_SYNC: int
    public constructor()
    public getProviderID(): string
    public getRowSetReader(): javax.sql.RowSetReader
    public getRowSetWriter(): javax.sql.RowSetWriter
    public getProviderGrade(): int
    public setDataSourceLock(arg0: int): void
    public getDataSourceLock(): int
    public supportsUpdatableView(): int
    public getVersion(): string
    public getVendor(): string
    public static class: java.lang.Class<any>
}

            }
        }
    }
}