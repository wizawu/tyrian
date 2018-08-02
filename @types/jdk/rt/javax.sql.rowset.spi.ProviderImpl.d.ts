declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
class ProviderImpl extends javax.sql.rowset.spi.SyncProvider {
    public setClassname(arg0: java.lang.String | string): void
    public getClassname(): string
    public setVendor(arg0: java.lang.String | string): void
    public getVendor(): string
    public setVersion(arg0: java.lang.String | string): void
    public getVersion(): string
    public setIndex(arg0: int): void
    public getIndex(): int
    public getDataSourceLock(): int
    public getProviderGrade(): int
    public getProviderID(): string
    public getRowSetReader(): javax.sql.RowSetReader
    public getRowSetWriter(): javax.sql.RowSetWriter
    public setDataSourceLock(arg0: int): void
    public supportsUpdatableView(): int
    public static class: java.lang.Class<any>
}

            }
        }
    }
}