declare namespace java {
    namespace sql {
interface PreparedStatement extends java.sql.Statement {
    executeQuery(): java.sql.ResultSet
    executeUpdate(): int
    setNull(arg0: int, arg1: int): void
    setBoolean(arg0: int, arg1: boolean): void
    setByte(arg0: int, arg1: byte): void
    setShort(arg0: int, arg1: short): void
    setInt(arg0: int, arg1: int): void
    setLong(arg0: int, arg1: long): void
    setFloat(arg0: int, arg1: float): void
    setDouble(arg0: int, arg1: double): void
    setBigDecimal(arg0: int, arg1: java.math.BigDecimal): void
    setString(arg0: int, arg1: java.lang.String | string): void
    setBytes(arg0: int, arg1: byte[]): void
    setDate(arg0: int, arg1: java.sql.Date): void
    setTime(arg0: int, arg1: java.sql.Time): void
    setTimestamp(arg0: int, arg1: java.sql.Timestamp): void
    setAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
    setUnicodeStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
    setBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: int): void
    clearParameters(): void
    setObject(arg0: int, arg1: java.lang.Object, arg2: int): void
    setObject(arg0: int, arg1: java.lang.Object): void
    execute(): boolean
    addBatch(): void
    setCharacterStream(arg0: int, arg1: java.io.Reader, arg2: int): void
    setRef(arg0: int, arg1: java.sql.Ref): void
    setBlob(arg0: int, arg1: java.sql.Blob): void
    setClob(arg0: int, arg1: java.sql.Clob): void
    setArray(arg0: int, arg1: java.sql.Array): void
    getMetaData(): java.sql.ResultSetMetaData
    setDate(arg0: int, arg1: java.sql.Date, arg2: java.util.Calendar): void
    setTime(arg0: int, arg1: java.sql.Time, arg2: java.util.Calendar): void
    setTimestamp(arg0: int, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
    setNull(arg0: int, arg1: int, arg2: java.lang.String | string): void
    setURL(arg0: int, arg1: java.net.URL): void
    getParameterMetaData(): java.sql.ParameterMetaData
    setRowId(arg0: int, arg1: java.sql.RowId): void
    setNString(arg0: int, arg1: java.lang.String | string): void
    setNCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
    setNClob(arg0: int, arg1: java.sql.NClob): void
    setClob(arg0: int, arg1: java.io.Reader, arg2: long): void
    setBlob(arg0: int, arg1: java.io.InputStream, arg2: long): void
    setNClob(arg0: int, arg1: java.io.Reader, arg2: long): void
    setSQLXML(arg0: int, arg1: java.sql.SQLXML): void
    setObject(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int): void
    setAsciiStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
    setBinaryStream(arg0: int, arg1: java.io.InputStream, arg2: long): void
    setCharacterStream(arg0: int, arg1: java.io.Reader, arg2: long): void
    setAsciiStream(arg0: int, arg1: java.io.InputStream): void
    setBinaryStream(arg0: int, arg1: java.io.InputStream): void
    setCharacterStream(arg0: int, arg1: java.io.Reader): void
    setNCharacterStream(arg0: int, arg1: java.io.Reader): void
    setClob(arg0: int, arg1: java.io.Reader): void
    setBlob(arg0: int, arg1: java.io.InputStream): void
    setNClob(arg0: int, arg1: java.io.Reader): void
    setObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType, arg3: int): void
    setObject(arg0: int, arg1: java.lang.Object, arg2: java.sql.SQLType): void
    executeLargeUpdate(): long
}

    }
}