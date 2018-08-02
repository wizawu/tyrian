declare namespace java {
    namespace sql {
interface ResultSet extends java.sql.Wrapper , java.lang.AutoCloseable {
    FETCH_FORWARD: int
    FETCH_REVERSE: int
    FETCH_UNKNOWN: int
    TYPE_FORWARD_ONLY: int
    TYPE_SCROLL_INSENSITIVE: int
    TYPE_SCROLL_SENSITIVE: int
    CONCUR_READ_ONLY: int
    CONCUR_UPDATABLE: int
    HOLD_CURSORS_OVER_COMMIT: int
    CLOSE_CURSORS_AT_COMMIT: int
    next(): boolean
    close(): void
    wasNull(): boolean
    getString(arg0: int): string
    getBoolean(arg0: int): boolean
    getByte(arg0: int): byte
    getShort(arg0: int): short
    getInt(arg0: int): int
    getLong(arg0: int): long
    getFloat(arg0: int): float
    getDouble(arg0: int): double
    getBigDecimal(arg0: int, arg1: int): java.math.BigDecimal
    getBytes(arg0: int): byte[]
    getDate(arg0: int): java.sql.Date
    getTime(arg0: int): java.sql.Time
    getTimestamp(arg0: int): java.sql.Timestamp
    getAsciiStream(arg0: int): java.io.InputStream
    getUnicodeStream(arg0: int): java.io.InputStream
    getBinaryStream(arg0: int): java.io.InputStream
    getString(arg0: java.lang.String | string): string
    getBoolean(arg0: java.lang.String | string): boolean
    getByte(arg0: java.lang.String | string): byte
    getShort(arg0: java.lang.String | string): short
    getInt(arg0: java.lang.String | string): int
    getLong(arg0: java.lang.String | string): long
    getFloat(arg0: java.lang.String | string): float
    getDouble(arg0: java.lang.String | string): double
    getBigDecimal(arg0: java.lang.String | string, arg1: int): java.math.BigDecimal
    getBytes(arg0: java.lang.String | string): byte[]
    getDate(arg0: java.lang.String | string): java.sql.Date
    getTime(arg0: java.lang.String | string): java.sql.Time
    getTimestamp(arg0: java.lang.String | string): java.sql.Timestamp
    getAsciiStream(arg0: java.lang.String | string): java.io.InputStream
    getUnicodeStream(arg0: java.lang.String | string): java.io.InputStream
    getBinaryStream(arg0: java.lang.String | string): java.io.InputStream
    getWarnings(): java.sql.SQLWarning
    clearWarnings(): void
    getCursorName(): string
    getMetaData(): java.sql.ResultSetMetaData
    getObject(arg0: int): java.lang.Object
    getObject(arg0: java.lang.String | string): java.lang.Object
    findColumn(arg0: java.lang.String | string): int
    getCharacterStream(arg0: int): java.io.Reader
    getCharacterStream(arg0: java.lang.String | string): java.io.Reader
    getBigDecimal(arg0: int): java.math.BigDecimal
    getBigDecimal(arg0: java.lang.String | string): java.math.BigDecimal
    isBeforeFirst(): boolean
    isAfterLast(): boolean
    isFirst(): boolean
    isLast(): boolean
    beforeFirst(): void
    afterLast(): void
    first(): boolean
    last(): boolean
    getRow(): int
    absolute(arg0: int): boolean
    relative(arg0: int): boolean
    previous(): boolean
    setFetchDirection(arg0: int): void
    getFetchDirection(): int
    setFetchSize(arg0: int): void
    getFetchSize(): int
    getType(): int
    getConcurrency(): int
    rowUpdated(): boolean
    rowInserted(): boolean
    rowDeleted(): boolean
    updateNull(arg0: int): void
    updateBoolean(arg0: int, arg1: boolean): void
    updateByte(arg0: int, arg1: byte): void
    updateShort(arg0: int, arg1: short): void
    updateInt(arg0: int, arg1: int): void
    updateLong(arg0: int, arg1: long): void
    updateFloat(arg0: int, arg1: float): void
    updateDouble(arg0: int, arg1: double): void
    updateBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
    updateString(arg0: int, arg1: java.lang.String | string): void
    updateBytes(arg0: int, arg1: byte[]): void
    updateDate(arg0: int, arg1: java.sql.Date): void
    updateTime(arg0: int, arg1: java.sql.Time): void
    updateTimestamp(arg0: int, arg1: java.sql.Timestamp): void
    updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
    updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
    updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
    updateObject(arg0: int, arg1: java.lang.Object, arg2: int): void
    updateObject(arg0: int, arg1: java.lang.Object): void
    updateNull(arg0: java.lang.String | string): void
    updateBoolean(arg0: java.lang.String | string, arg1: boolean): void
    updateByte(arg0: java.lang.String | string, arg1: byte): void
    updateShort(arg0: java.lang.String | string, arg1: short): void
    updateInt(arg0: java.lang.String | string, arg1: int): void
    updateLong(arg0: java.lang.String | string, arg1: long): void
    updateFloat(arg0: java.lang.String | string, arg1: float): void
    updateDouble(arg0: java.lang.String | string, arg1: double): void
    updateBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
    updateString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    updateBytes(arg0: java.lang.String | string, arg1: byte[]): void
    updateDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
    updateTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
    updateTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
    updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
    updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: int): void
    updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: int): void
    updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: int): void
    updateObject(arg0: java.lang.String | string, arg1: java.lang.Object): void
    insertRow(): void
    updateRow(): void
    deleteRow(): void
    refreshRow(): void
    cancelRowUpdates(): void
    moveToInsertRow(): void
    moveToCurrentRow(): void
    getStatement(): java.sql.Statement
    getObject(arg0: int, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
    getRef(arg0: int): java.sql.Ref
    getBlob(arg0: int): java.sql.Blob
    getClob(arg0: int): java.sql.Clob
    getArray(arg0: int): java.sql.Array
    getObject(arg0: java.lang.String | string, arg1: java.util.Map<java.lang.String, java.lang.Class<any>>): java.lang.Object
    getRef(arg0: java.lang.String | string): java.sql.Ref
    getBlob(arg0: java.lang.String | string): java.sql.Blob
    getClob(arg0: java.lang.String | string): java.sql.Clob
    getArray(arg0: java.lang.String | string): java.sql.Array
    getDate(arg0: int, arg1: java.util.Calendar): java.sql.Date
    getDate(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Date
    getTime(arg0: int, arg1: java.util.Calendar): java.sql.Time
    getTime(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Time
    getTimestamp(arg0: int, arg1: java.util.Calendar): java.sql.Timestamp
    getTimestamp(arg0: java.lang.String | string, arg1: java.util.Calendar): java.sql.Timestamp
    getURL(arg0: int): java.net.URL
    getURL(arg0: java.lang.String | string): java.net.URL
    updateRef(arg0: int, arg1: java.sql.Ref): void
    updateRef(arg0: java.lang.String | string, arg1: java.sql.Ref): void
    updateBlob(arg0: int, arg1: java.sql.Blob): void
    updateBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
    updateClob(arg0: int, arg1: java.sql.Clob): void
    updateClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
    updateArray(arg0: int, arg1: java.sql.Array): void
    updateArray(arg0: java.lang.String | string, arg1: java.sql.Array): void
    getRowId(arg0: int): java.sql.RowId
    getRowId(arg0: java.lang.String | string): java.sql.RowId
    updateRowId(arg0: int, arg1: java.sql.RowId): void
    updateRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
    getHoldability(): int
    isClosed(): boolean
    updateNString(arg0: int, arg1: java.lang.String | string): void
    updateNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    updateNClob(arg0: int, arg1: java.sql.NClob): void
    updateNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
    getNClob(arg0: int): java.sql.NClob
    getNClob(arg0: java.lang.String | string): java.sql.NClob
    getSQLXML(arg0: int): java.sql.SQLXML
    getSQLXML(arg0: java.lang.String | string): java.sql.SQLXML
    updateSQLXML(arg0: int, arg1: java.sql.SQLXML): void
    updateSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
    getNString(arg0: int): string
    getNString(arg0: java.lang.String | string): string
    getNCharacterStream(arg0: int): java.io.Reader
    getNCharacterStream(arg0: java.lang.String | string): java.io.Reader
    updateNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
    updateNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
    updateAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
    updateBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
    updateCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
    updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
    updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
    updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
    updateBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
    updateBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: long): void
    updateClob(arg0: int, arg1: java.io.Reader, arg2: long): void
    updateClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
    updateNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
    updateNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: long): void
    updateNCharacterStream(arg0: int, arg1: java.io.Reader): void
    updateNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
    updateAsciiStream(arg0: int, arg1: java.io.InputStream): void
    updateBinaryStream(arg0: int, arg1: java.io.InputStream): void
    updateCharacterStream(arg0: int, arg1: java.io.Reader): void
    updateAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
    updateBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
    updateCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
    updateBlob(arg0: int, arg1: java.io.InputStream): void
    updateBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
    updateClob(arg0: int, arg1: java.io.Reader): void
    updateClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
    updateNClob(arg0: int, arg1: java.io.Reader): void
    updateNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
    getObject<T>(arg0: int, arg1: java.lang.Class<T>): T
    getObject<T>(arg0: java.lang.String | string, arg1: java.lang.Class<T>): T
    updateObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
    updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
    updateObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType): void
    updateObject(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: java.sql.SQLType): void
}

    }
}