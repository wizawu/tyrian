declare namespace java {
    namespace sql {
interface Driver {
    connect(arg0: java.lang.String | string, arg1: java.util.Properties): java.sql.Connection
    acceptsURL(arg0: java.lang.String | string): boolean
    getPropertyInfo(arg0: java.lang.String | string, arg1: java.util.Properties): java.sql.DriverPropertyInfo[]
    getMajorVersion(): int
    getMinorVersion(): int
    jdbcCompliant(): boolean
    getParentLogger(): java.util.logging.Logger
}

    }
}