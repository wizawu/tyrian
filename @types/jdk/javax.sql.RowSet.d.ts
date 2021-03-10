declare namespace javax {
  namespace sql {

    interface RowSet extends java.sql.ResultSet {
      getUrl(): java.lang.String
      setUrl(arg0: java.lang.String | string): void
      getDataSourceName(): java.lang.String
      setDataSourceName(arg0: java.lang.String | string): void
      getUsername(): java.lang.String
      setUsername(arg0: java.lang.String | string): void
      getPassword(): java.lang.String
      setPassword(arg0: java.lang.String | string): void
      getTransactionIsolation(): number
      setTransactionIsolation(arg0: number | java.lang.Integer): void
      getTypeMap(): java.util.Map<java.lang.String,java.lang.Class<unknown>>
      setTypeMap(arg0: java.util.Map<java.lang.String,java.lang.Class<unknown>>): void
      getCommand(): java.lang.String
      setCommand(arg0: java.lang.String | string): void
      isReadOnly(): boolean
      setReadOnly(arg0: boolean | java.lang.Boolean): void
      getMaxFieldSize(): number
      setMaxFieldSize(arg0: number | java.lang.Integer): void
      getMaxRows(): number
      setMaxRows(arg0: number | java.lang.Integer): void
      getEscapeProcessing(): boolean
      setEscapeProcessing(arg0: boolean | java.lang.Boolean): void
      getQueryTimeout(): number
      setQueryTimeout(arg0: number | java.lang.Integer): void
      setType(arg0: number | java.lang.Integer): void
      setConcurrency(arg0: number | java.lang.Integer): void
      setNull(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setNull(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      setNull(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      setNull(arg0: java.lang.String | string, arg1: number | java.lang.Integer, arg2: java.lang.String | string): void
      setBoolean(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): void
      setBoolean(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean): void
      setByte(arg0: number | java.lang.Integer, arg1: number | java.lang.Byte): void
      setByte(arg0: java.lang.String | string, arg1: number | java.lang.Byte): void
      setShort(arg0: number | java.lang.Integer, arg1: number | java.lang.Short): void
      setShort(arg0: java.lang.String | string, arg1: number | java.lang.Short): void
      setInt(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      setInt(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
      setLong(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): void
      setLong(arg0: java.lang.String | string, arg1: number | java.lang.Long): void
      setFloat(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): void
      setFloat(arg0: java.lang.String | string, arg1: number | java.lang.Float): void
      setDouble(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): void
      setDouble(arg0: java.lang.String | string, arg1: number | java.lang.Double): void
      setBigDecimal(arg0: number | java.lang.Integer, arg1: java.math.BigDecimal): void
      setBigDecimal(arg0: java.lang.String | string, arg1: java.math.BigDecimal): void
      setString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      setBytes(arg0: number | java.lang.Integer, arg1: number[] | java.lang.Byte[]): void
      setBytes(arg0: java.lang.String | string, arg1: number[] | java.lang.Byte[]): void
      setDate(arg0: number | java.lang.Integer, arg1: java.sql.Date): void
      setTime(arg0: number | java.lang.Integer, arg1: java.sql.Time): void
      setTimestamp(arg0: number | java.lang.Integer, arg1: java.sql.Timestamp): void
      setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp): void
      setAsciiStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      setBinaryStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Integer): void
      setCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Integer): void
      setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Integer): void
      setAsciiStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      setAsciiStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      setBinaryStream(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      setBinaryStream(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      setCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      setCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
      setNCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): void
      setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      setObject(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
      setObject(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): void
      setRef(arg0: number | java.lang.Integer, arg1: java.sql.Ref): void
      setBlob(arg0: number | java.lang.Integer, arg1: java.sql.Blob): void
      setBlob(arg0: number | java.lang.Integer, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      setBlob(arg0: number | java.lang.Integer, arg1: java.io.InputStream): void
      setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: number | java.lang.Long): void
      setBlob(arg0: java.lang.String | string, arg1: java.sql.Blob): void
      setBlob(arg0: java.lang.String | string, arg1: java.io.InputStream): void
      setClob(arg0: number | java.lang.Integer, arg1: java.sql.Clob): void
      setClob(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setClob(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      setClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setClob(arg0: java.lang.String | string, arg1: java.sql.Clob): void
      setClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
      setArray(arg0: number | java.lang.Integer, arg1: java.sql.Array): void
      setDate(arg0: number | java.lang.Integer, arg1: java.sql.Date, arg2: java.util.Calendar): void
      setDate(arg0: java.lang.String | string, arg1: java.sql.Date): void
      setDate(arg0: java.lang.String | string, arg1: java.sql.Date, arg2: java.util.Calendar): void
      setTime(arg0: number | java.lang.Integer, arg1: java.sql.Time, arg2: java.util.Calendar): void
      setTime(arg0: java.lang.String | string, arg1: java.sql.Time): void
      setTime(arg0: java.lang.String | string, arg1: java.sql.Time, arg2: java.util.Calendar): void
      setTimestamp(arg0: number | java.lang.Integer, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
      setTimestamp(arg0: java.lang.String | string, arg1: java.sql.Timestamp, arg2: java.util.Calendar): void
      clearParameters(): void
      execute(): void
      addRowSetListener(arg0: javax.sql.RowSetListener): void
      removeRowSetListener(arg0: javax.sql.RowSetListener): void
      setSQLXML(arg0: number | java.lang.Integer, arg1: java.sql.SQLXML): void
      setSQLXML(arg0: java.lang.String | string, arg1: java.sql.SQLXML): void
      setRowId(arg0: number | java.lang.Integer, arg1: java.sql.RowId): void
      setRowId(arg0: java.lang.String | string, arg1: java.sql.RowId): void
      setNString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
      setNString(arg0: java.lang.String | string, arg1: java.lang.String | string): void
      setNCharacterStream(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setNCharacterStream(arg0: java.lang.String | string, arg1: java.io.Reader): void
      setNClob(arg0: java.lang.String | string, arg1: java.sql.NClob): void
      setNClob(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setNClob(arg0: java.lang.String | string, arg1: java.io.Reader): void
      setNClob(arg0: number | java.lang.Integer, arg1: java.io.Reader, arg2: number | java.lang.Long): void
      setNClob(arg0: number | java.lang.Integer, arg1: java.sql.NClob): void
      setNClob(arg0: number | java.lang.Integer, arg1: java.io.Reader): void
      setURL(arg0: number | java.lang.Integer, arg1: java.net.URL): void
    }

  }
}
