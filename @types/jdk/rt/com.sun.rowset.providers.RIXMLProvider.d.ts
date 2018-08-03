declare namespace com {
    namespace sun {
        namespace rowset {
            namespace providers {
                class RIXMLProvider extends javax.sql.rowset.spi.SyncProvider {
                    public constructor()
                    public getProviderID(): string
                    public setXmlReader(arg0: javax.sql.rowset.spi.XmlReader): void
                    public setXmlWriter(arg0: javax.sql.rowset.spi.XmlWriter): void
                    public getXmlReader(): javax.sql.rowset.spi.XmlReader
                    public getXmlWriter(): javax.sql.rowset.spi.XmlWriter
                    public getProviderGrade(): int
                    public supportsUpdatableView(): int
                    public getDataSourceLock(): int
                    public setDataSourceLock(arg0: int): void
                    public getRowSetWriter(): javax.sql.RowSetWriter
                    public getRowSetReader(): javax.sql.RowSetReader
                    public getVersion(): string
                    public getVendor(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}