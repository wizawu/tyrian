declare namespace java {
  namespace sql {

    interface PreparedStatement extends java.sql.Statement {
      executeQuery(): java.sql.ResultSet
      executeUpdate(): number
      setNull(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setBoolean(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      setByte(arg0: number | java.lang.Integer, arg1: number | java.lang.Byte): void
      setShort(arg0: number | java.lang.Integer, arg1: number | java.lang.Short): void
      setInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setLong(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): void
      setFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): void
      setDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): void
      setBigDecimal(arg0: number | java.lang.Integer, arg1: java.math.BigDecimal): void
      setString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setBytes(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[]): void
      setDate(arg0: number | java.lang.Integer, arg1: java.sql.Date): void
      setTime(arg0: number | java.lang.Integer, arg1: java.sql.Time): void
      setTimestamp(arg0: number | java.lang.Integer, arg1: java.sql.Timestamp): void
      setAsciiStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      setUnicodeStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      setBinaryStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      clearParameters(): void
      setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
      execute(): boolean
      addBatch(): void
      setCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Integer): void
      setRef(arg0: number | java.lang.Integer, arg1: java.sql.Ref): void
      setBlob(arg0: number | java.lang.Integer, arg1: java.sql.Blob): void
      setClob(arg0: number | java.lang.Integer, arg1: java.sql.Clob): void
      setArray(arg0: number | java.lang.Integer, arg1: java.sql.Array): void
      getMetaData(): java.sql.ResultSetMetaData
      setDate(arg0: number | java.lang.Integer, arg1: java.sql.Date, arg2: java.util.Calendar): void
      setTime(arg0: number | java.lang.Integer, arg1: java.sql.Time, arg2: java.util.Calendar): void
      setTimestamp(arg0: number | java.lang.Integer, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
      setNull(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      setURL(arg0: number | java.lang.Integer, arg1: java.net.URL): void
      getParameterMetaData(): java.sql.ParameterMetaData
      setRowId(arg0: number | java.lang.Integer, arg1: java.sql.RowId): void
      setNString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setNCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setNClob(arg0: number | java.lang.Integer, arg1: java.sql.NClob): void
      setClob(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setBlob(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      setNClob(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setSQLXML(arg0: number | java.lang.Integer, arg1: java.sql.SQLXML): void
      setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      setAsciiStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      setBinaryStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      setCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setAsciiStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      setBinaryStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      setCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      setNCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      setClob(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      setBlob(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      setNClob(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: java.sql.SQLType, arg3: number | java.lang.Integer): void
      setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: java.sql.SQLType): void
      executeLargeUpdate(): number
    }

  }
}
