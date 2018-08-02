declare namespace javax {
    namespace sql {
        namespace rowset {
            namespace spi {
class SyncFactory {
    public static ROWSET_SYNC_PROVIDER: string
    public static ROWSET_SYNC_VENDOR: string
    public static ROWSET_SYNC_PROVIDER_VERSION: string
    public static registerProvider(arg0: java.lang.String | string): void
    public static getSyncFactory(): javax.sql.rowset.spi.SyncFactory
    public static unregisterProvider(arg0: java.lang.String | string): void
    public static getInstance(arg0: java.lang.String | string): javax.sql.rowset.spi.SyncProvider
    public static getRegisteredProviders(): java.util.Enumeration<javax.sql.rowset.spi.SyncProvider>
    public static setLogger(arg0: java.util.logging.Logger): void
    public static setLogger(arg0: java.util.logging.Logger, arg1: java.util.logging.Level): void
    public static getLogger(): java.util.logging.Logger
    public static setJNDIContext(arg0: javax.naming.Context): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}