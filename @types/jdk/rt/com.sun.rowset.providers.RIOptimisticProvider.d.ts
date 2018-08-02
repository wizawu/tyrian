declare namespace com {
    namespace sun {
        namespace rowset {
            namespace providers {
                class RIOptimisticProvider extends javax.sql.rowset.spi.SyncProvider implements java.io.Serializable {
                    public constructor()
                    public getProviderID(): string
                    public getRowSetWriter(): javax.sql.RowSetWriter
                    public getRowSetReader(): javax.sql.RowSetReader
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